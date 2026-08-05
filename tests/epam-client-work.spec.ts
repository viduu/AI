import { test, expect } from '@playwright/test';

test('navigate to Client Work from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Open Services from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that "Client Work" text is visible on the page
  await expect(page.getByText('Client Work')).toBeVisible();
});
