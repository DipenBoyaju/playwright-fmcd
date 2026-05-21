import { test, expect } from "@playwright/test";

test("User can instantly view the secure internal dashboard page", async ({
  page,
}) => {
  // Go straight to the internal secure dashboard URL!
  await page.goto("https://the-internet.herokuapp.com/secure");

  // Assert that you are already logged in automatically
  const welcomeHeader = page.locator("h2");
  await expect(welcomeHeader).toHaveText("Secure Area");
});
