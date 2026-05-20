import { expect, test } from "@playwright/test";
import { BookingPage } from "../pages/BookingPage";

test("User can successfully submit a booking form", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();

  await bookingPage.fillBookingForm(
    "Prateek",
    "Dev",
    "prateek@test.com",
    "123456789012",
  );

  await bookingPage.bookRoomButton.click();

  await expect(bookingPage.successMessage).toBeVisible({ timeout: 10000 });
});
