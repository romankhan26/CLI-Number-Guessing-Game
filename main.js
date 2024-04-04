#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var randomNumber = Math.floor(Math.random() * 4 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk_1.default.bold.blue("Please guess a number in between 1-4")
    }
]);
if (answers === randomNumber) {
    console.log(chalk_1.default.green.bold.italic("congratulations! You have guessed a right number!"));
}
else {
    console.log(chalk_1.default.red.bold.italic("Sorry! You've guessed a wrong number!"));
}
