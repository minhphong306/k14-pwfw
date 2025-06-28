import { test } from '@playwright/test';

test('Homepage', async ({ page }) => {
    await page.goto("https://playwrightvn.com");
});