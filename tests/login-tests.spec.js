
import { test } from "@playwright/test";
import { UserLogin } from "../pages/user-login-page";
import { testData } from "../data/testData"
/*
const validUsers = [
  testData.standardUser,
  // testData.problemUser,
  // testData.performanceGlitchUser,
  // testData.errorUser,
  // testData.visualUser,
];
*/

test.describe("Validate successfull logins", () => {
  let userLogin;
  test.beforeEach(async ({ page }) => {
    userLogin = new UserLogin(page);
  });
  test(`Validate userName login`, async ({ }) => {
    await userLogin.fillInLogin(testData.beatriceUser.email, testData.beatriceUser.password, testData.beatriceUser.userName);
  });

});

