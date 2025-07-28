#!/usr/bin/env node

/**
 * Image Optimization Script for Fastcomm
 * Converts images to modern formats and optimizes for production
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  inputDir: './public',
  outputDir: './public/optimized',
  quality: {
    jpeg: 85,
    webp: 85,
    avif: 65,
    png: 90
  },
  sizes: {
    hero: [480, 800, 1200, 1920],
    logo: [100, 200, 400],
    partner: [100, 200, 300],
    default: [480, 800, 1200]
  }
};

// Image processing functions
async function processImage(inputPath, outputDir, options = {}) {
  const { basename } = path.parse(inputPath);
  if (!basename) {
    console.log(`⚠️  Skipping invalid path: ${inputPath}`);
    return;
  }
  const nameWithoutExt = basename.split('.')[0];
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing ${basename}...`);
    
    // Determine sizes based on image type
    const sizes = options.sizes || CONFIG.sizes.default;
    
    // Create different sizes and formats
    for (const width of sizes) {
      if (width > metadata.width) continue;
      
      const resized = image.resize(width, null, {
        withoutEnlargement: true
      });
      
      // Generate WebP
      await resized
        .webp({ quality: CONFIG.quality.webp })
        .toFile(path.join(outputDir, `${nameWithoutExt}-${width}w.webp`));
      
      // Generate AVIF
      await resized
        .avif({ quality: CONFIG.quality.avif })
        .toFile(path.join(outputDir, `${nameWithoutExt}-${width}w.avif`));
      
      // Generate optimized original format
      if (metadata.format === 'jpeg') {
        await resized
          .jpeg({ quality: CONFIG.quality.jpeg })
          .toFile(path.join(outputDir, `${nameWithoutExt}-${width}w.jpg`));
      } else if (metadata.format === 'png') {
        await resized
          .png({ quality: CONFIG.quality.png })
          .toFile(path.join(outputDir, `${nameWithoutExt}-${width}w.png`));
      }
    }
    
    console.log(`✅ Processed ${basename}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${basename}:`, error.message);
  }
}

// Generate responsive image component
function generateResponsiveImageComponent(imageName, alt, sizes) {
  const sizeList = sizes.join('w, ') + 'w';
  
  return `
export const ${imageName}ResponsiveImage = ({ className, alt = "${alt}" }) => (
  <picture className={className}>
    <source
      srcSet="${sizes.map(size => `"/optimized/${imageName}-${size}w.avif ${size}w"`).join(', ')}"
      type="image/avif"
    />
    <source
      srcSet="${sizes.map(size => `"/optimized/${imageName}-${size}w.webp ${size}w"`).join(', ')}"
      type="image/webp"
    />
    <img
      src="/optimized/${imageName}-${sizes[0]}w.jpg"
      srcSet="${sizes.map(size => `"/optimized/${imageName}-${size}w.jpg ${size}w"`).join(', ')}"
      sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 25vw"
      alt={alt}
      loading="lazy"
    />
  </picture>
);
`;
}

// Main optimization function
async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  // Process hero background
  const heroPath = './src/assets/hero-bg.jpg';
  if (fs.existsSync(heroPath)) {
    await processImage(heroPath, CONFIG.outputDir, {
      sizes: CONFIG.sizes.hero
    });
  }
  
  // Process logos
  const logoPatterns = [
    './public/lovable-uploads/*.png',
    './public/ctc-favicon.png'
  ];
  
  for (const pattern of logoPatterns) {
    const files = await glob(pattern);
    for (const file of files) {
      await processImage(file, CONFIG.outputDir, {
        sizes: CONFIG.sizes.logo
      });
    }
  }
  
  // Process partner logos
  const partnerFiles = await glob('./public/logos/hospitals/*.{png,jpg,jpeg}');
  for (const file of partnerFiles) {
    await processImage(file, CONFIG.outputDir, {
      sizes: CONFIG.sizes.partner
    });
  }
  
  // Generate responsive image components
  const componentContent = `
// Auto-generated responsive image components
import React from 'react';

${generateResponsiveImageComponent('hero-bg', 'Fastcomm Hero Background', CONFIG.sizes.hero)}
${generateResponsiveImageComponent('logo', 'Fastcomm Logo', CONFIG.sizes.logo)}
`;
  
  fs.writeFileSync('./src/components/ResponsiveImages.tsx', componentContent);
  
  console.log('✅ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${CONFIG.outputDir}`);
  console.log('🧩 React components generated in: ./src/components/ResponsiveImages.tsx');
}

// Run if called directly
if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages, processImage };