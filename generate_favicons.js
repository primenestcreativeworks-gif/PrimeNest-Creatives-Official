const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generate() {
  const input = path.join(__dirname, 'public', 'sitelogo.png');
  
  // Create 32x32 PNG
  await sharp(input)
    .resize(32, 32)
    .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
    
  // Create 16x16 PNG
  await sharp(input)
    .resize(16, 16)
    .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));

  // Create 48x48 PNG (Google Search specifically requests multiples of 48)
  await sharp(input)
    .resize(48, 48)
    .toFile(path.join(__dirname, 'public', 'favicon-48x48.png'));

  // Create 192x192 PNG
  await sharp(input)
    .resize(192, 192)
    .toFile(path.join(__dirname, 'public', 'favicon-192x192.png'));

  // Create apple touch icon
  await sharp(input)
    .resize(180, 180)
    .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));

  // Copy 32x32 png as favicon.ico which works perfectly and correctly for websites
  fs.copyFileSync(
    path.join(__dirname, 'public', 'favicon-32x32.png'),
    path.join(__dirname, 'public', 'favicon.ico')
  );
  
  console.log("Favicons generated successfully!");
}

generate().catch(console.error);
