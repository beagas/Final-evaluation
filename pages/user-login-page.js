import { expect } from "@playwright/test";
import { testData } from "../data/testData";

export class UserLogin {
  constructor(page) {
    this.page = page;
  }

  async fillInLogin(email, password, userName) {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
    await this.page.getByLabel('email').fill(email);
    await this.page.getByLabel('password').fill(password);
    await this.page.locator(".v-btn__content").click();
    await expect(this.page.locator(".v-subheader")).toHaveText(userName);

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
