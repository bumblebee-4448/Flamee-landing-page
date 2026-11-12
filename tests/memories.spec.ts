import { test, expect } from '@playwright/test'

test('memory route, keyboard scrubbing, filters and photos without popup', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const section = page.locator('#ky-niem')
  await expect(section).toBeVisible()
  const slider = section.getByRole('slider', { name: 'Tua dòng thời gian kỷ niệm' })
  await slider.focus()
  await page.keyboard.press('End')
  await expect(slider).toHaveAttribute('aria-valuetext', new RegExp('12.10.2026'))
  await page.keyboard.press('Home')
  await expect(slider).toHaveAttribute('aria-valuetext', new RegExp('18.08.2024'))
  await section.getByRole('button', { name: '2025', exact: true }).click()
  await expect(section.locator('.memory-event')).toHaveCount(2)
  await section.locator('.memory-photo').first().click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

test('horizontal drag changes the selected memory without moving the page vertically', async ({ page }) => {
  await page.goto('/')
  const section = page.locator('#ky-niem')
  await section.scrollIntoViewIfNeeded()
  const rail = section.locator('.memory-viewport')
  const box = (await rail.boundingBox())!
  const before = await page.evaluate(() => scrollY)
  await page.mouse.move(box.x + box.width * .75, box.y + box.height * .45)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width * .2, box.y + box.height * .45, { steps: 18 })
  await page.mouse.up()
  await expect(section.getByRole('slider')).not.toHaveValue('0')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(Math.abs(await page.evaluate(() => scrollY) - before)).toBeLessThan(4)
})

test('range dragging snaps, edges clamp, and resizing preserves selection', async ({ page }) => {
  await page.goto('/')
  const section = page.locator('#ky-niem')
  const slider = section.getByRole('slider')
  await slider.scrollIntoViewIfNeeded()
  const box = (await slider.boundingBox())!
  await page.mouse.move(box.x + 11, box.y + 16)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width - 11, box.y + 16, { steps: 20 })
  await page.mouse.up()
  await expect(slider).toHaveValue('1000')
  await slider.focus()
  await page.keyboard.press('ArrowRight')
  await expect(slider).toHaveValue('1000')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(slider).toHaveValue('1000')
  await expect(slider).toHaveAttribute('aria-valuetext', new RegExp('12.10.2026'))
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await section.getByRole('button', { name: '2026', exact: true }).click()
  await expect(slider).toHaveValue('0')
  await expect(section.locator('.memory-event')).toHaveCount(2)
})

test('phone vertical pan scrolls the page while horizontal swipe scrubs', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, reducedMotion: 'reduce' })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:4173')
  const photo = page.locator('#ky-niem .memory-photo').first()
  await photo.scrollIntoViewIfNeeded()
  const session = await context.newCDPSession(page)
  async function swipe(x: number, y: number, dx: number, dy: number) {
    await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] })
    for (let step = 1; step <= 12; step++) {
      await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + dx * step / 12, y: y + dy * step / 12 }] })
      await page.waitForTimeout(12)
    }
    await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  }
  let box = (await photo.boundingBox())!
  const before = await page.evaluate(() => scrollY)
  await swipe(box.x + box.width / 2, box.y + box.height / 2, 2, -120)
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(before + 30)
  await expect(page.locator('#ky-niem input[type="range"]')).toHaveValue('0')
  await photo.scrollIntoViewIfNeeded()
  box = (await photo.boundingBox())!
  await swipe(box.x + box.width * .8, box.y + box.height / 2, -box.width * .65, 2)
  await expect(page.locator('#ky-niem input[type="range"]')).not.toHaveValue('0')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await context.close()
})

test('mobile timeline does not overflow and supports keyboard scrubbing', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const section = page.locator('#ky-niem')
  const slider = section.getByRole('slider')
  await slider.focus()
  await page.keyboard.press('ArrowRight')
  await expect(slider).toHaveAttribute('aria-valuetext', new RegExp('24.12.2024'))
  await page.keyboard.press('ArrowLeft')
  await expect(slider).toHaveAttribute('aria-valuetext', new RegExp('18.08.2024'))
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
