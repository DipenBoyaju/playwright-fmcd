import { expect, test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate user and save session state", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");
  await page.getByRole("button", { name: /login/i }).click();

  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!",
  );

  await page.context().storageState({ path: authFile });
});
