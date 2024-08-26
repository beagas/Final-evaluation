import { expect } from "@playwright/test";

export class OrdersHistory {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.getByText('Orders History').click();
  }

  async findInTable(itemName) {
    this.page.waitForSelector('.v-table__overflow');
    await expect(this.page.locator('.v-table__overflow').toHaveText(itemName));
  }


}
