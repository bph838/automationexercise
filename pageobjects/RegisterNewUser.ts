import { expect, Page } from "@playwright/test";
import { UserData, Address } from "./Data";

export class RegisterNewUser {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async createAccount(user: UserData) {
    await expect(
      this.page.getByRole("heading").filter({
        hasText: "Enter Account Information",
      }),
    ).toBeVisible();

    await this.page
      .locator(`input[name="title"][value="${user.title}"]`)
      .check();

    await this.page.getByTestId("password").fill(user.password);

    let dob: string[] = user.dob.split("/");
    await this.page.getByTestId("days").selectOption(dob[0]);
    await this.page.getByTestId("months").selectOption(dob[1]);
    await this.page.getByTestId("years").selectOption(dob[2]);

    //Select checkbox 'Sign up for our newsletter!'
    if (user.newsletter) await this.page.locator("#newsletter").click();

    //Select checkbox 'Receive special offers from our partners!'
    if (user.optin) await this.page.locator("#optin").click();

    await this.page.getByTestId("first_name").fill(user.firstName);
    await this.page.getByTestId("last_name").fill(user.lastName);
    await this.page.getByTestId("country").selectOption(user.address.country);
    await this.page.getByTestId("address").fill(user.address.address1);
    await this.page.getByTestId("state").fill(user.address.state);
    await this.page.getByTestId("city").fill(user.address.city);
    await this.page.getByTestId("zipcode").fill(user.address.zipcode);
    await this.page.getByTestId("mobile_number").fill(user.mobile);

    await this.page.getByRole("button").getByText("Create Account").click();

    //14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(
      this.page.getByRole("heading").filter({
        hasText: "Account Created!",
      }),
    ).toBeVisible();

    await this.page.getByRole("link").getByText("Continue").click();

    await expect(
      this.page.getByText(`Logged in as ${user.firstName} ${user.lastName}`),
    ).toBeVisible();
  }
}
