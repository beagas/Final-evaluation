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

    await this.page.waitForSelector(".v-subheader");
    await expect(this.page.locator(".v-subheader")).toHaveText(userName);

    if (email === testData.validUser.email) {
      await this.page.waitForSelector(".v-subheader");
      await expect(this.page.locator(".v-subheader")).toHaveText(userName);
    } else if (email === testData.invalidUser.email) {
      await this.page.waitForSelector(testData.locators.loginError);
      await expect(this.page.locator(testData.locators.loginError)).toHaveText(testData.errorMessages.invalidCredentials);


    }
  }
}
