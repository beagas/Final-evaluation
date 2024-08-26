import { expect } from "@playwright/test";
import { testData } from "../data/testData";

export class UserLogin {
  constructor(page) {
    this.page = page;
  }

  async goto(){
    await this.page.goto("https://lunch.devbstaging.com/dishes/thursday/K-A"); 
    await expect(this.page.locator(".headline.red--text")).toContainText("K-A"); 
  }
}
