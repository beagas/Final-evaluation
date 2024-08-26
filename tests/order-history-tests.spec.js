import { test } from "@playwright/test";
import { UserLogin } from "../pages/user-login-page";
import { testData } from "../data/testData";
import { OrdersHistory } from "../pages/orders-history-page";
import { OrderMain } from "../pages/order-main-page";

test.describe("Order history", async () => {
  let ordersHistory;
  let userLogin;
  let orderMain;
  
  test.beforeEach(async ({ page }) => {
    ordersHistory = new OrdersHistory(page);
    userLogin = new UserLogin(page);
    orderMain = new OrderMain(page);
    await userLogin.fillInLogin(testData.beatriceUser.email, testData.beatriceUser.password, testData.beatriceUser.userName);
  });

 
  test(`Order History contains item ${testData.soup1.name}`, async () => {
    await orderMain.goto();
    await orderMain.chooseDish(testData.soup1.name);
    await ordersHistory.goTo();
    ordersHistory.findInTable(testData.soup1.name);
  });


});



