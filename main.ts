#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.bold.blue("Please guess a number in between 1-6")
    }
]);

if (answers ===randomNumber) {
    console.log(chalk.green.bold.italic("congratulations! You have guessed a right number!"));
} else {
    console.log(chalk.red.bold.italic("Sorry! You've guessed a wrong number!"));
}   