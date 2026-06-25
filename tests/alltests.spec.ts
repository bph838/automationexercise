import { test, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { UserData } from "../pageobjects/Data";

import userJson from "../data/user1.json";

const user: UserData = userJson as unknown as UserData;

const RUNSTATE: string = "state.json";

test.describe.configure({ mode: "serial" });

test("Test Case 1: Register User", async ({ browser }) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  const homePage = new HomePage(page);
  await homePage.gotoHomePage();
  const signup = await homePage.gotoSignInLogin();
  const registerNewUser = await signup.registerNewUser(user);
  await registerNewUser.createAccount(user);
});

test("Test Case 2: Delete User", async ({ browser }) => {
  let webContext = await browser.newContext({
    storageState: RUNSTATE,
  });
  const page = await webContext.newPage();
  const homePage = new HomePage(page);
  await homePage.gotoHomePage();
  const signin = await homePage.gotoSignInLogin();
  await signin.signInUser(user);
  await homePage.deleteUser();  
});
