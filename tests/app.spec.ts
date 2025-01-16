import { test, expect, Page } from '@playwright/test';

const totalProducts = (count: number) => `span:text("Total: ${count}")`;
const getCheckboxLocator = (page: Page, name: string, option: string) =>
  page.locator(`[data-testid="checkbox-${name}-${option}"]`);

test.describe('Home page tests', () => {
  test('should render the app with all the products', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('aside')).toBeVisible();
    await expect(page.locator(totalProducts(100))).toBeVisible();
  });
  test('should click on the checkbox filters and verify the products has been filtered', async ({ page }) => {
    await page.goto('/');
    const blueCheckbox = getCheckboxLocator(page, "color", "Blue");
    await expect(blueCheckbox).toBeVisible();
    await blueCheckbox.click();
    await expect(page.locator(totalProducts(16))).toBeVisible();

    // Apply a second filter
    const cottonCheckbox = getCheckboxLocator(page, "material", "Cotton");
    await expect(cottonCheckbox).toBeVisible();
    await cottonCheckbox.click();
    await expect(page.locator(totalProducts(4))).toBeVisible();
  });

  test('should click on a checkbox filter and verify the reset button behaviour', async ({ page }) => {
    await page.goto('/');
    const topCheckbox = getCheckboxLocator(page, "type", "Top");
    const resetButton = page.locator('[data-testid="reset-button"]');

    await expect(resetButton).not.toBeVisible();
    await topCheckbox.click();

    await expect(resetButton).toBeVisible();
    await resetButton.click();

    await expect(topCheckbox).not.toBeChecked();
    await expect(resetButton).not.toBeVisible();
  });
});
