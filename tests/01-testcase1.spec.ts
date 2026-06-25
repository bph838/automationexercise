import { test, expect, BrowserContext } from "@playwright/test";

const RUNSTATE: string = "state.json";
/*
test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/");

  await page.waitForSelector(
    '[aria-label="This site asks for consent to use your data"]',
    { state: "visible" },
  );

  await page.getByRole("button").getByText("Consent").click();

  await context.storageState({ path: RUNSTATE });
  page.close();

  // webContext = await browser.newContext({ storageState: RUNSTATE });
});

test.skip("Has correct title", async ({ browser }) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Automation Exercise");
});

test.skip("Run though test 1", async ({ browser }) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  await page.goto("/");

  const name: string = "Ben";
  const fullname: string = "Ben Hooper";

  //looking for a H2 with text: Full-Fledged practice website for Automation Engineers
  await expect(
    page.getByRole("heading").filter({
      hasText: "Full-Fledged practice website for Automation Engineers",
    }),
  ).toBeVisible();

  //4. Click on 'Signup / Login' button
  await page
    .getByRole("link")
    .filter({
      hasText: /Signup \/ Login/,
    })
    .click();

  //5. Verify 'New User Signup!' is visible
  await expect(
    page.getByRole("heading").filter({
      hasText: "New User Signup!",
    }),
  ).toBeVisible();

  //6. Enter name and email address
  await page.getByTestId("signup-name").fill(fullname);
  await page.getByTestId("signup-email").fill("benjaminpaulhooper@gmail.com");

  //7. Click 'Signup' button
  await page.getByRole("button").getByText("Signup").click();

  //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(
    page.getByRole("heading").filter({
      hasText: "Enter Account Information",
    }),
  ).toBeVisible();

  //9. Fill details: Title, Name, Email, Password, Date of birth
  await page.getByRole("radio", { name: "Mr." }).check();

  await page.getByTestId("password").fill("Pa$$word11");

  await page.getByTestId("days").selectOption("4");
  await page.getByTestId("months").selectOption("2");
  await page.getByTestId("years").selectOption("1974");

  //10. Select checkbox 'Sign up for our newsletter!'
  await page.locator("#newsletter").click();

  //11. Select checkbox 'Receive special offers from our partners!'
  await page.locator("#optin").click();

  //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.getByTestId("first_name").fill(name);
  await page.getByTestId("last_name").fill("Hooper");
  await page.getByTestId("country").selectOption("United States");
  await page.getByTestId("address").fill("13 Station Road");
  await page.getByTestId("state").fill("North Somerset");
  await page.getByTestId("city").fill("Backwell");
  await page.getByTestId("zipcode").fill("BS483NW");
  await page.getByTestId("mobile_number").fill("07515657533");

  //13. Click 'Create Account button'
  await page.getByRole("button").getByText("Create Account").click();

  //14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(
    page.getByRole("heading").filter({
      hasText: "Account Created!",
    }),
  ).toBeVisible();

  //15. Click 'Continue' button
  await page.getByRole("link").getByText("Continue").click();

  //16. Verify that 'Logged in as username' is visible
  await expect(page.getByText(`Logged in as ${fullname}`)).toBeVisible();

  /*
  //17. Click 'Delete Account' button
  await page.getByRole("link").getByText("Delete Account").click();

  //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(
    page.getByRole("heading").filter({
      hasText: "ACCOUNT DELETED!",
    }),
  ).toBeVisible();
  */
//});
