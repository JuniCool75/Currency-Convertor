import inquirer from "inquirer";

let conversion= {
    "PKR": {
        "USD": 0.0044,
        "Euro": 0.0037,
        "PKR": 1,
    },
    "Euro": {
        "USD": 1.21,
        "Euro": 1,
        "PKR": 271.80,
    },
    "USD": {
        "USD": 1,
        "Euro": 0.83,
        "PKR": 225.58,
    }
}
const answer: {
    from:   "PKR" | "USD" | "Euro",
    to:     "PKR" | "USD" | "Euro",
    amount: number,

} = await inquirer.prompt([
    { 
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "Euro"],
        message: "Select Your Currency:"

    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "Euro"],
        message: "Select Your Currency conversion:"

    },    
{
    type: "number",
    name: "amount",
    message: "Enter Your conversion Amount:"
}
]);

const {from, to, amount} = answer;

if (from && to && amount) {
    let result = conversion[from] [to] * amount;
console.log(`Your Conversion from ${from} to ${to} is ${result}`)
}
    else{
        console.log("invalid Value")
    }