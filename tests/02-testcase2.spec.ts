import { test, expect, BrowserContext } from "@playwright/test";

const RUNSTATE: string = "state.json";

test("Run though test 2", async ({ browser }) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  await page.goto("/");

  const name: string = "Ben";
  const fullname: string = "Ben Hooper";

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Automation Exercise");

  //4. Click on 'Signup / Login' button
  await page
    .getByRole("link")
    .filter({
      hasText: /Signup \/ Login/,
    })
    .click();

  //5. Verify 'Login to your account' is visible
  await expect(
    page.getByRole("heading").filter({
      hasText: "Login to your account",
    }),
  ).toBeVisible();

  //6. Enter correct email address and password
  await page.getByTestId("login-email").fill("benjaminpaulhooper@gmail.com");
  await page.getByTestId("login-password").fill("Pa$$word11");

  //7. Click 'login' button
  await page
    .getByRole("button")
    .filter({
      hasText: "Login",
    })
    .click();

  //8. Verify that 'Logged in as username' is visible
  await expect(page.getByText(`Logged in as ${fullname}`)).toBeVisible();
});

test("Test Case 3: Login User with incorrect email and password", async ({
  browser,
}) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  await page.goto("/");

  const name: string = "Ben";
  const fullname: string = "Ben Hooper";
  const email: string = "benjaminpaulhooper@gmail.com";

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Automation Exercise");

  //4. Click on 'Signup / Login' button
  await page
    .getByRole("link")
    .filter({
      hasText: /Signup \/ Login/,
    })
    .click();

  //5. Verify 'Login to your account' is visible
  await expect(
    page.getByRole("heading").filter({
      hasText: "Login to your account",
    }),
  ).toBeVisible();

  //6. Enter correct email address and password
  await page.getByTestId("login-email").fill(email);
  await page.getByTestId("login-password").fill("dfhfdghsxfgj");

  //7. Click 'login' button
  await page
    .getByRole("button")
    .filter({
      hasText: "Login",
    })
    .click();

  //8. Verify error 'Your email or password is incorrect!' is visible
  await expect(
    page.getByText("Your email or password is incorrect!"),
  ).toBeVisible();
});

test("Test Case 4: Logout User", async ({ browser }) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  await page.goto("/");

  const name: string = "Ben";
  const fullname: string = "Ben Hooper";

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Automation Exercise");

  //4. Click on 'Signup / Login' button
  await page
    .getByRole("link")
    .filter({
      hasText: /Signup \/ Login/,
    })
    .click();

  //5. Verify 'Login to your account' is visible
  await expect(
    page.getByRole("heading").filter({
      hasText: "Login to your account",
    }),
  ).toBeVisible();

  //6. Enter correct email address and password
  await page.getByTestId("login-email").fill("benjaminpaulhooper@gmail.com");
  await page.getByTestId("login-password").fill("Pa$$word11");

  //7. Click 'login' button
  await page
    .getByRole("button")
    .filter({
      hasText: "Login",
    })
    .click();

  //8. Verify that 'Logged in as username' is visible
  await expect(page.getByText(`Logged in as ${fullname}`)).toBeVisible();

  //9. Click 'Logout' button
  await page
    .getByRole("link")
    .filter({
      hasText: "Logout",
    })
    .click();


    
});
