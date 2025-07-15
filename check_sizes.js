const fs = require('fs');
const path = require('path');

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

const baseDir = '/Users/macikv04macctc/Documents/GitHub/fastcomm-health-connect-hub';

const files = [
  'public/fastcomm-demo.mp4',
  'public/fastcomm-demo-large.mp4',
  'public/fastcomm-demo-original.mp4',
  'src/assets/hero-bg.jpg',
  'src/assets/unimed-logo.png',
  'public/ctc-favicon.png',
  'public/placeholder.svg',
  'public/lovable-uploads/18ffcb20-6460-4a77-837b-0648705e26db.png',
  'public/lovable-uploads/2e2b68d7-64c8-49b8-b7bd-54d6766ac7de.png',
  'public/logos/hospitals/bp-oficial.jpeg',
  'public/logos/hospitals/bp.svg',
  'public/logos/hospitals/ctr.png',
  'public/logos/hospitals/ctr.svg',
  'public/logos/hospitals/fsfx.svg',
  'public/logos/hospitals/hcor.png',
  'public/logos/hospitals/hospital-moinhos.jpg',
  'public/logos/hospitals/oswaldo-cruz.svg',
  'public/logos/hospitals/placeholder-logo.svg',
  'public/logos/hospitals/santa-casa.svg',
  'public/logos/hospitals/unimed.jpg',
  'public/logos/hospitals/unimed.svg'
];

console.log('File Size Analysis:');
console.log('==================');

files.forEach(file => {
  const fullPath = path.join(baseDir, file);
  const size = getFileSize(fullPath);
  const exists = fs.existsSync(fullPath);
  
  console.log(`${file}: ${exists ? formatBytes(size) : 'FILE NOT FOUND'}`);
});