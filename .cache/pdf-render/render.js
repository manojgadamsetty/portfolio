const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const filePath = 'file://' + path.resolve(__dirname, '..', '..', 'resume-cv.html');
  console.log('Loading', filePath);
  await page.goto(filePath, { waitUntil: 'networkidle' });
  const out = path.resolve(__dirname, '..', 'assets', 'documents', 'resume.pdf');
  console.log('Saving PDF to', out);
  await page.pdf({ path: out, format: 'A4', printBackground: true });
  await browser.close();
  console.log('PDF generation complete');
})();
