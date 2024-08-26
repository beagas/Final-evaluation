import { expect } from "@playwright/test";
import { testData } from "../data/testData";

export class UserLogin {
  constructor(page) {
    this.page = page;
  }

  async fillInLogin(userName, password) {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
    await this.page.locator(".email").fill(userName);
    await this.page.locator('[name="password"]').fill(password);
    await this.page.locator(".v-btn__content").click();


    /*
    if (userName === testData.lockedOutUser.name) {
      await this.page.waitForSelector(testData.headers.loginError);
      await expect(this.page.locator(testData.headers.loginError)).toHaveText(testData.errorMessages.lockedOutUserErrorMessage);

    } else if (userName === testData.invalidUser.name) {
      await this.page.waitForSelector(testData.headers.loginError);
      await expect(this.page.locator(testData.headers.loginError)).toHaveText(testData.errorMessages.loginErrorMessage);

    } else if (userName === testData.emptyUser.name) {
      await this.page.waitForSelector(testData.headers.loginError);
      await expect(this.page.locator(testData.headers.loginError)).toHaveText(testData.errorMessages.emptyBodyLoginErrorMessage);

    } else if (password === testData.emptyPassword.password) {
      await this.page.waitForSelector(testData.headers.loginError);
      await expect(this.page.locator(testData.headers.loginError)).toHaveText(testData.errorMessages.emptyPasswordLoginErrorMessage);
    }
  
  */
  }
}
