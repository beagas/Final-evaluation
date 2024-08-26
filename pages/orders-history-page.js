import { expect } from "@playwright/test";

export class OrdersHistory {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.getByText('Orders History').click();
  }

  async findInTable(itemName1, itemName2,itemsPrice) {
    await this.page.waitForSelector('.v-table__overflow');
    await expect(this.page.locator('.v-table__overflow').toHaveText(itemName));
  }

  /*
  
    async backToHomePage() {
      await this.page.locator("#back-to-products").click();
    }
  
    async removeFromCart(productName) {
      const item = this.page.locator(`.cart_item:has(.inventory_item_name:text-is("${productName}"))`);
      await item.locator('button[id*="remove"]').click();
    }
  
    async verifyThatItemIsRemoved(productName) {
      const itemLocator = this.page.locator(`.inventory_item_name:text-is("${productName}")`);
      await expect(itemLocator).toHaveCount(0);
    }
    */
}
