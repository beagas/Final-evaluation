import { test } from "@playwright/test";
import { UserLogin } from "../pages/user-login-page";
import { testData } from "../data/testData";
import { OrdersHistory } from "../pages/orders-history-page";

test.describe("Order history", async () => {
  let ordersHistory;
  let userLogin;
  
  test.beforeEach(async ({ page }) => {
    ordersHistory = new OrdersHistory(page);
    userLogin = new UserLogin(page);
    await userLogin.fillInLogin(testData.beatriceUser.email, testData.beatriceUser.password, testData.beatriceUser.userName);
  });

  test(`open orders history`, async ({page}) => {
    await ordersHistory.goToOrdersHistory();
  test(`Order History contains item ${testData.soup1.name}`, async ({ }) => {
    await ordersHistory.goTo();
    ordersHistory.findInTable(testData.soup1.name);
  });


});

});

