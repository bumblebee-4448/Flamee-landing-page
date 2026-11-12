import { test, expect } from '@playwright/test'

test('hero text and image wait together for decoded assets, even on revisits', async ({ page }) => {
  await page.route('**/*flamee-journal*', async route => {
    await new Promise(resolve => setTimeout(resolve, 1400))
    await route.continue().catch(() => {})
  })
  for (let visit = 0; visit < 2; visit++) {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    const hero = page.locator('.hero-layout')
    await expect(hero).toHaveAttribute('data-ready', 'false')
    await expect(hero).toHaveCSS('opacity', '0')
    await expect(page.getByRole('status')).toBeVisible()
    await expect(hero).toHaveAttribute('data-ready', 'true', { timeout: 5000 })
    expect(await page.locator('.hero-journal').evaluate((e: HTMLImageElement) => e.complete && e.naturalWidth > 0)).toBe(true)
    await expect(hero).toHaveCSS('opacity', '1')
    await expect(page.getByRole('status')).toHaveCount(0)
  }
})

test('section reveals once and leaves reduced-motion content fully visible', async ({ page }) => {
  await page.goto('/')
  const heading = page.locator('#cam-xuc .mood-feature-heading')
  await expect(heading).toHaveCSS('opacity', '0')
  await heading.scrollIntoViewIfNeeded()
  await expect(heading).toHaveCSS('opacity', '1')
  await page.evaluate(() => scrollTo(0, 0))
  await expect(heading).toHaveCSS('opacity', '1')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await expect(heading).toHaveCSS('opacity', '1')
  expect(await heading.evaluate(e => getComputedStyle(e).transform)).toMatch(/none|matrix\(1, 0, 0, 1, 0, 0\)/)
})
