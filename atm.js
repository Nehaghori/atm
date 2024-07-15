"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var user = await inquirer_1.default.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "welcome"
    },
    { type: "number",
        name: "pinCode",
        message: "enter your 4 digit pinCode"
    },
    // creating listing and withdrawl method
    {
        type: "list",
        name: "accountType",
        message: "select your account type",
        choices: ["current", "saving"]
    },
    //transition type
    {
        type: "list",
        name: "transitionType",
        message: "select your transition type",
        choices: ["cash", "withdrawl"]
    },
    //selected amount
    {
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: [1000, 2000, 5000, 10000],
        when: function (user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount",
        when: function (user) {
            return user.transitionType === "withdrawl";
        }
    }
]);
// final slip 
if (user.pinCode) {
    var balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    var enteramount = user.amount;
    if (enteramount <= balance) {
        var remaining = balance - enteramount;
        console.log('you have withdrawl rupeess ${enteramount} and you have remaining balance ${remaining}');
    }
}
