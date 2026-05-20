import * as dotenv from "dotenv";

dotenv.config();

export class BookingPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder("Firstname");
    this.lastNameInput = page.getByPlaceholder("Lastname");
    this.emailInput = page.getByPlaceholder("Email");
    this.phoneInput = page.getByPlaceholder("Phone");
    this.bookRoomButton = page.getByRole("button", { name: "Book" });
    this.successMessage = page.getByText("Booking Successful!");
  }

  async navigate() {
    await this.page.goto(process.env.UI_BASE_URL);
  }

  async fillBookingForm(firstName, lastName, email, phone) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }
}
