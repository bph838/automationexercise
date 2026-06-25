import { expect, Page } from "@playwright/test";
import { RegisterNewUser } from "./RegisterNewUser";
import { UserData } from "./Data";

export class SignupLogin {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async registerNewUser(user: UserData) {
    //check we on the right page
    await expect(
      this.page.getByRole("heading").filter({
        hasText: "New User Signup!",
      }),
    ).toBeVisible();
    //6. Enter name and email address
    await this.page
      .getByTestId("signup-name")
      .fill(`${user.firstName} ${user.lastName}`);
    await this.page.getByTestId("signup-email").fill(user.email);

    //Click 'Signup' button
    await this.page.getByRole("button").getByText("Signup").click();

    return new RegisterNewUser(this.page);
  }

  async signInUser(user: UserData) {
    await expect(
      this.page.getByRole("heading").filter({
        hasText: "Login to your account",
      }),
    ).toBeVisible();

    await this.page.getByTestId("login-email").fill(user.email);
    await this.page.getByTestId("login-password").fill(user.password);

    //7. Click 'login' button
    await this.page
      .getByRole("button")
      .filter({
        hasText: "Login",
      })
      .click();
  }
}
