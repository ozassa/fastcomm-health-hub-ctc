#!/usr/bin/env node

/**
 * Video Optimization Script for Fastcomm
 * Converts videos to modern formats and multiple bitrates
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Configuration
const CONFIG = {
  inputDir: './public',
  outputDir: './public/video',
  bitrates: {
    '480p': { width: 854, height: 480, bitrate: '1000k' },
    '720p': { width: 1280, height: 720, bitrate: '2500k' },
    '1080p': { width: 1920, height: 1080, bitrate: '5000k' }
  },
  formats: ['mp4', 'webm'],
  poster: true
};

// Check if FFmpeg is installed
async function checkFFmpeg() {
  try {
    await execAsync('ffmpeg -version');
    return true;
  } catch (error) {
    console.warn('⚠️  FFmpeg not found. Video optimization will be skipped.');
    console.warn('To enable video optimization, install FFmpeg:');
    console.warn('macOS: brew install ffmpeg');
    console.warn('Ubuntu: sudo apt install ffmpeg');
    return false;
  }
}

// Generate video poster/thumbnail
async function generatePoster(inputPath, outputPath, time = '00:00:01') {
  try {
    const command = `ffmpeg -i "${inputPath}" -ss ${time} -vframes 1 -y "${outputPath}"`;
    await execAsync(command);
    console.log(`📸 Generated poster: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error generating poster: ${error.message}`);
  }
}

// Convert video to different formats and bitrates
async function convertVideo(inputPath, outputDir, basename) {
  const nameWithoutExt = basename.split('.')[0];
  
  for (const quality of Object.keys(CONFIG.bitrates)) {
    const { width, height, bitrate } = CONFIG.bitrates[quality];
    
    for (const format of CONFIG.formats) {
      const outputPath = path.join(outputDir, `${nameWithoutExt}-${quality}.${format}`);
      
      let command;
      
      if (format === 'mp4') {
        command = `ffmpeg -i "${inputPath}" -vf scale=${width}:${height} -c:v libx264 -b:v ${bitrate} -c:a aac -b:a 128k -movflags +faststart -y "${outputPath}"`;
      } else if (format === 'webm') {
        command = `ffmpeg -i "${inputPath}" -vf scale=${width}:${height} -c:v libvpx-vp9 -b:v ${bitrate} -c:a libopus -b:a 128k -y "${outputPath}"`;
      }
      
      try {
        console.log(`🎬 Converting ${basename} to ${quality} ${format.toUpperCase()}...`);
        await execAsync(command);
        console.log(`✅ Created: ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`❌ Error converting ${basename} to ${quality} ${format}: ${error.message}`);
      }
    }
  }
}

// Generate video component with adaptive bitrate
function generateVideoComponent(videoName) {
  return `
export const ${videoName}Video = ({ 
  className, 
  controls = true, 
  autoPlay = false, 
  muted = true,
  loop = false,
  poster 
}) => {
  const videoRef = useRef(null);
  const [quality, setQuality] = useState('720p');
  
  // Detect optimal quality based on screen size and connection
  useEffect(() => {
    const detectOptimalQuality = () => {
      const width = window.innerWidth;
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      if (width < 854 || (connection && connection.effectiveType === '2g')) {
        setQuality('480p');
      } else if (width < 1280 || (connection && connection.effectiveType === '3g')) {
        setQuality('720p');
      } else {
        setQuality('1080p');
      }
    };
    
    detectOptimalQuality();
    window.addEventListener('resize', detectOptimalQuality);
    
    return () => window.removeEventListener('resize', detectOptimalQuality);
  }, []);
  
  return (
    <video
      ref={videoRef}
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      poster={poster || \`/video/${videoName}-poster.jpg\`}
      playsInline
    >
      <source src={"/video/${videoName}-{quality}.webm"} type="video/webm" />
      <source src={"/video/${videoName}-{quality}.mp4"} type="video/mp4" />
      <p>Your browser does not support the video tag.</p>
    </video>
  );
};
`;
}

// Main optimization function
async function optimizeVideos() {
  console.log('🎬 Starting video optimization...');
  
  // Check FFmpeg
  if (!(await checkFFmpeg())) {
    return;
  }
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  // Find all video files
  const videoFiles = [
    './public/fastcomm-demo.mp4',
    './public/fastcomm-demo-large.mp4',
    './public/fastcomm-demo-original.mp4'
  ].filter(file => fs.existsSync(file));
  
  for (const videoFile of videoFiles) {
    const basename = path.basename(videoFile);
    const nameWithoutExt = basename.split('.')[0];
    
    console.log(`🎬 Processing ${basename}...`);
    
    // Generate poster
    if (CONFIG.poster) {
      const posterPath = path.join(CONFIG.outputDir, `${nameWithoutExt}-poster.jpg`);
      await generatePoster(videoFile, posterPath);
    }
    
    // Convert to different formats and bitrates
    await convertVideo(videoFile, CONFIG.outputDir, basename);
  }
  
  // Generate video components
  const componentContent = `
// Auto-generated video components
import React, { useRef, useState, useEffect } from 'react';

${generateVideoComponent('fastcomm-demo')}

// Video quality selector component
export const VideoQualitySelector = ({ videoRef, videoName, onQualityChange }) => {
  const qualities = ['480p', '720p', '1080p'];
  
  const changeQuality = (quality) => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      onQualityChange(quality);
      
      // Restore playback position
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.currentTime = currentTime;
      }, { once: true });
    }
  };
  
  return (
    <div className="video-quality-selector">
      {qualities.map(quality => (
        <button 
          key={quality}
          onClick={() => changeQuality(quality)}
          className="quality-button"
        >
          {quality}
        </button>
      ))}
    </div>
  );
};
`;
  
  fs.writeFileSync('./src/components/OptimizedVideo.tsx', componentContent);
  
  console.log('✅ Video optimization complete!');
  console.log(`📁 Optimized videos saved to: ${CONFIG.outputDir}`);
  console.log('🧩 React components generated in: ./src/components/OptimizedVideo.tsx');
}

// Generate HLS manifest for adaptive streaming
async function generateHLS(inputPath, outputDir, basename) {
  const nameWithoutExt = basename.split('.')[0];
  const hlsDir = path.join(outputDir, `${nameWithoutExt}-hls`);
  
  if (!fs.existsSync(hlsDir)) {
    fs.mkdirSync(hlsDir, { recursive: true });
  }
  
  const command = `ffmpeg -i "${inputPath}" \\
    -filter_complex "[0:v]split=3[v1][v2][v3]; [v1]copy[v1out]; [v2]scale=w=1280:h=720[v2out]; [v3]scale=w=854:h=480[v3out]" \\
    -map "[v1out]" -c:v:0 libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v:0 5M -maxrate:v:0 5M -minrate:v:0 5M -bufsize:v:0 10M -preset slow -g 48 -sc_threshold 0 -keyint_min 48 \\
    -map "[v2out]" -c:v:1 libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v:1 3M -maxrate:v:1 3M -minrate:v:1 3M -bufsize:v:1 6M -preset slow -g 48 -sc_threshold 0 -keyint_min 48 \\
    -map "[v3out]" -c:v:2 libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v:2 1M -maxrate:v:2 1M -minrate:v:2 1M -bufsize:v:2 2M -preset slow -g 48 -sc_threshold 0 -keyint_min 48 \\
    -map a:0 -c:a:0 aac -b:a:0 96k -ac 2 \\
    -map a:0 -c:a:1 aac -b:a:1 96k -ac 2 \\
    -map a:0 -c:a:2 aac -b:a:2 96k -ac 2 \\
    -f hls -hls_time 2 -hls_playlist_type vod -hls_flags independent_segments \\
    -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" \\
    -master_pl_name "${nameWithoutExt}.m3u8" \\
    -hls_segment_filename "${hlsDir}/${nameWithoutExt}_%v_segment_%03d.ts" \\
    "${hlsDir}/${nameWithoutExt}_%v.m3u8"`;
  
  try {
    console.log(`🎬 Generating HLS for ${basename}...`);
    await execAsync(command);
    console.log(`✅ HLS generated: ${nameWithoutExt}.m3u8`);
  } catch (error) {
    console.error(`❌ Error generating HLS: ${error.message}`);
  }
}

// Run if called directly
if (require.main === module) {
  optimizeVideos().catch(console.error);
}

module.exports = { optimizeVideos, convertVideo, generatePoster };