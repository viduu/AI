import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL(/epam\.com\/?$/);

  const servicesMenu = page.getByRole('link', { name: /^Services$/ });
  await expect(servicesMenu).toBeVisible();
  await servicesMenu.click();

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible();

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    clientWorkLink.click(),
  ]);

  await expect(page.getByRole('heading', { name: /Client Work/i })).toBeVisible();
  await expect(page.getByText('Client Work')).toBeVisible();
});
