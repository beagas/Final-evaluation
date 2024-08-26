export const testData = {

    validUser: {
        email: "beatrice.gaskiene@sft.com",
        password: "beatrice",
        userName: "Beatrice Gaskiene",
    },
    invalidUser: {
        email: "beatrice.gaskiene@ttt.com",
        password: "beatrice",
        userName: "Beatrice Gaskiene",
    },

    locators: {
        subheader: "v-subheader pl-2",
        loginError: 'h3[data-test="error"]',
        orderSubmitBtn: ".orders-list-button.v-btn",
        pop_up: ".v-snack__content",
    },

    soup1: {
        name: "1st soup",
        price: "1.00€",
    },
    soup2: {
        name: "2nd soup",
        price: "10.00€",
    },
    mainDish1: {
        name: "1st main dish",
        price: "0.10€",
    },
    mainDish2: {
        name: "2nd main dish",
        price: "2.00€",
    },
    errorMessages: {
        invalidCredentials: "Username or password incorrect",
    },
}