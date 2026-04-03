const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  // Wait for dev server to be ready
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 10000 });
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({
    path: '/Users/openclaw/projects/JWGolf-Prototype/screenshot-homepage.png',
    fullPage: false
  });
  
  console.log('Screenshot saved to screenshot-homepage.png');
  
  await browser.close();
})();