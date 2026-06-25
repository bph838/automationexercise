import { expect, Page } from "@playwright/test";
import { SignupLogin } from "./SignupLogin";

export class HomePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoHomePage() {
    await this.page.goto("/");
    //looking for a H2 with text: Full-Fledged practice website for Automation Engineers
    await expect(
      this.page.getByRole("heading").filter({
        hasText: "Full-Fledged practice website for Automation Engineers",
      }),
    ).toBeVisible();
  }

  async gotoSignInLogin() {
    await this.page
      .getByRole("link")
      .filter({
        hasText: /Signup \/ Login/,
      })
      .click();

    await expect(
      this.page.getByRole("heading").filter({
        hasText: "New User Signup!",
      }),
    ).toBeVisible();

    await expect(
      this.page.getByRole("heading").filter({
        hasText: "Login to your account",
      }),
    ).toBeVisible();

    return new SignupLogin(this.page);
  }
}
