import { expect } from "@playwright/test";
import { testData } from "../data/testData";

export class OrderMain {
  constructor(page) {
    this.page = page;
  }

  async goto(){
    await this.page.goto("https://lunch.devbstaging.com/dishes/thursday/K-A"); 

    //await this.page.locator('div.v-list__tile__title >> text=K-A').click();
    await expect(this.page.locator(".headline.red--text")).toContainText("K-A"); 
  }

  async chooseDish(dishName){
    await this.page.getByText(dishName).click();
  }

  async clickOrderSubmit(button, pop_up){
    await this.page.locator(button).click();
    await expect(this.page.locator(pop_up)).toBeVisible();
 
  }

}
