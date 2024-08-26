import { test } from "@playwright/test";
import { UserLogin } from "../pages/user-login-page";
import { OrderMain } from "../pages/order-main-page";
import { testData } from "../data/testData";


let orderMain;
let userLogin;

test.beforeEach(async ({page}) => {
    orderMain = new OrderMain(page);
    userLogin = new UserLogin(page);
    await userLogin.fillInLogin(testData.beatriceUser.email, testData.beatriceUser.password, testData.beatriceUser.userName);
});


test.describe("Validate orders", () => {

    test("Submit order", async ({ page }) => {
        await orderMain.goto();
        await orderMain.chooseDish(testData.itemName.soup1);
        await orderMain.chooseDish(testData.itemName.main1);
        await orderMain.clickOrderSubmit(testData.locators.orderSubmitBtn,
             testData.locators.pop_up);

    });
  
});
  