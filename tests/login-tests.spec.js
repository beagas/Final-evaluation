import { test } from "@playwright/test";
import { UserLogin } from "../pages/user-login-page";
import { testData } from "../data/testData"

test.describe("Validate logins", () => {
  let userLogin;
  test.beforeEach(async ({ page }) => {
    userLogin = new UserLogin(page);
  });
  test(`Verify valid user login`, async () => {
    await userLogin.fillInLogin(testData.validUser.email, testData.validUser.password, testData.validUser.userName);
  });

  test(`Verify correct error message is displayed when credentials are invalid`, async ({ }) => {
    await userLogin.fillInLogin(testData.invalidUser.email, testData.invalidUser.password, testData.invalidUser.userName);
  });

});

