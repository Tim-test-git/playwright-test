import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
});
test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
});

test('test2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );

  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
});

test('test3', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
});
