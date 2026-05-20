import { expect, test } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

test("Verify backend room API is returning data", async ({ request }) => {
  const response = await request.get(`${process.env.API_BASE_URL}/room`);

  expect(response.status()).toBe(200);

  const responseBody = response.json();

  expect(responseBody.rooms.length).toBeGreaterThan(0);

  console.log("Room Data:", responseBody.rooms[0]);
});
