import { test, expect } from '@playwright/test'

test('paper tickets always show benefits and align their actions', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const section = page.locator('#goi-thanh-vien')
  await section.scrollIntoViewIfNeeded()
  await expect(section.locator('.membership-ticket')).toHaveCount(3)
  await expect(section.locator('.ticket-fold-toggle, [inert]')).toHaveCount(0)
  for (const [id, count] of [['free',8], ['together',8], ['complete',7]] as const) {
    await expect(section.locator('#benefits-' + id + ' li')).toHaveCount(count)
    await expect(section.locator('#benefits-' + id)).toBeVisible()
  }
  const boxes = await section.locator('.membership-ticket').evaluateAll(es => es.map(e => ({height: e.getBoundingClientRect().height, action: e.querySelector('.ticket-action')!.getBoundingClientRect().top})))
  expect(Math.max(...boxes.map(x => x.height)) - Math.min(...boxes.map(x => x.height))).toBeLessThan(1)
  expect(Math.max(...boxes.map(x => x.action)) - Math.min(...boxes.map(x => x.action))).toBeLessThan(1)
  const initialURL = page.url()
  for (const button of await section.locator('.ticket-action').all()) {
    await button.click()
    await expect(page).toHaveURL(initialURL)
  }
  await expect(page.locator('.header-cta .animate-shimmer-slide')).toHaveCount(1)
  await page.locator('.header-cta').click()
  await expect(page).toHaveURL(/#goi-thanh-vien$/)
})
