import { test, expect } from "@playwright/test";

test("User can successfully log in to the test environment", async ({
  page,
}) => {
  // 1. Navigate to a stable login playground site
  await page.goto("https://the-internet.herokuapp.com/login");

  // 2. Fill out the mock login form using native locators
  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");

  // 3. Click the submit button using its text attribute
  await page.getByRole("button", { name: /login/i }).click();

  // 4. Assert that the green success message alert is visible on screen
  const successAlert = page.locator("#flash");
  await expect(successAlert).toBeVisible();
  await expect(successAlert).toContainText("You logged into a secure area!");
});
