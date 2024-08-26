export const testData = {

    beatriceUser: {
        email: "beatrice.gaskiene@sft.com",
        password: "beatrice",
        userName: "Beatrice Gaskiene",
    },

    errorMessages: {
        lockedOutUserErrorMessage: "Epic sadface: Sorry, this user has been locked out.",
        loginErrorMessage: "Epic sadface: Username and password do not match any user in this service",
        emptyBodyLoginErrorMessage: "Epic sadface: Username is required",
        emptyPasswordLoginErrorMessage: "Epic sadface: Password is required",
        incorrectButtonLocation: "Button location is incorrect",
    },
    headers: {
        loginError: 'h3[data-test="error"]',
    },
    locators: {
        selectOption: ".select option",
        selectContainer: ".select_container",
        productSorting: ".product_sort_container",
    },
    defaultSortingOption: "Name (A to Z)",

    productName: {
        backpack: "Sauce Labs Backpack",
        light: "Sauce Labs Bike Light",
        shirt: "Sauce Labs Bolt T-Shirt",
        jacket: "Sauce Labs Fleece Jacket",
        onesie: "Sauce Labs Onesie",
        redShirt: "Test.allTheThings() T-Shirt (Red)",
    }






}
