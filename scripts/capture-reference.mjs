import { chromium } from '@playwright/test'
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
  for (const [url, name] of [['http://127.0.0.1:4173', 'before'], ['https://mobile-magicui.vercel.app/', 'mobile-reference']]) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
    await page.waitForTimeout(2500)
    await page.screenshot({ path: `.taste-skill/magic-reference/${name}-fold.png` })
    if (name === 'mobile-reference') {
      await page.evaluate(() => window.scrollTo(0, 1000))
      await page.waitForTimeout(500)
      await page.screenshot({ path: `.taste-skill/magic-reference/${name}-features.png` })
    }
    console.log(name, await page.title())
  }
} finally { await browser.close() }
