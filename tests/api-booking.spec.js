import { expect, test } from "@playwright/test";

test("Verify JSONPlaceholder API returns blog posts successfully", async ({
  request,
}) => {
  // 1. Hit a 100% free, stable public API endpoint
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  // 2. Assert that the server responded with a 200 OK status code
  expect(response.status()).toBe(200);

  // 3. Parse the dynamic JSON text into a readable JavaScript object
  const postData = await response.json();

  // 4. Validate that the object contains the correct properties
  expect(postData).toHaveProperty("userId");
  expect(postData).toHaveProperty("id");
  expect(postData).toHaveProperty("title");

  // 5. Print out the response data to your GitHub Actions stream
  console.log("Successfully fetched post title:", postData.title);
  console.log("Successfully fetched post title:", postData.id);
});
