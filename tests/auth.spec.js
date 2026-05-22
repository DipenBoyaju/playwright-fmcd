import { expect, test as setup } from "@playwright/test";
import fs from "fs";
const authFile = "playwright/.auth/user.json";

setup("authenticate user and save session state", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;

  if (!username || !password) {
    throw new Error("TEST_USERNAME and TEST_PASSWORD must be set");
  }

  await page.locator("#username").fill(username);
  await page.locator("#password").fill(password);
  await page.getByRole("button", { name: /login/i }).click();

  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!",
  );

  if (!fs.existsSync("playwright/.auth")) {
    fs.mkdirSync("playwright/.auth", { recursive: true });
  }

  await page.context().storageState({ path: authFile });
});
