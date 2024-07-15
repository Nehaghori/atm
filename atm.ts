import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type : "string",
        name : "cardholdername",
        message : "welcome"
    },

    {   type : "number",
        name  : "pinCode",
        message : "enter your 4 digit pinCode"
    },

    // creating listing and withdrawl method
    {
        type : "list",
        name : "accountType",
        message: "select your account type",
        choices : ["current","saving"]
    },

    //transition type
    {
         type : "list",
        name : "transitionType",
        message : "select your transition type",
        choices: ["cash", "withdrawl"]
    },

    //selected amount
    {
       type : "list",
       name : "amount",
       message : "select your amount",
       choices: [1000, 2000, 5000, 10000],
       when(user){
        return user.transitionType === "cash"
       }  
    },

    {
        type : "number",
       name : "amount",
       message : "enter your amount",
       when(user){
        return user.transitionType === "withdrawl"
       }  
    }
])
// final slip 

    if (user.pinCode){
        const balance = Math.floor(Math.random() * 10000 + 1)
        console.log(balance)
        const enteramount = user.amount;

        if(enteramount <= balance) {
            const remaining = balance - enteramount

            console.log('you have withdrawl rupeess ${enteramount} and you have remaining balance ${remaining}')
        }
    }