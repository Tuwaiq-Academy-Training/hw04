"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("prompt");
async function name() {
    const { age, whight, hight, gender } = await (0, prompt_1.get)([
        "age",
        "whight",
        "hight",
        "gender",
    ]);
    let equation = +whight / +hight;
    if (age >= 20) {
        bmicalcabove20(equation);
    }
    else {
        bmiles20(equation);
    }
    return equation;
}
function bmicalcabove20(x) {
    if (x < 16) {
        console.log("you are Severe Thinnes");
    }
    else if (x == 16 || x == 17) {
        console.log("you are Moderate Thinnes");
    }
    else if (x == 18 || x == 19) {
        console.log("you are Mild Thinnes");
    }
    else if (x == 20) {
        console.log("you are Normal");
    }
    else if (x == 21 || x == 22) {
        console.log("you are Overweight");
    }
    else if (x == 23 || x == 24) {
        console.log("you are Obese Class I");
    }
    else if (x == 25 || x == 26) {
        console.log("you are Obese Class II");
    }
    else if (x == 27 || x == 28) {
        console.log("you are Obese Class III");
    }
    else if (x > 28) {
        console.log("you are Obese Class IV");
    }
}
function bmiles20(x) {
    if (x < 5) {
        console.log("you are underweight");
    }
    else if (x >= 5 || x <= 85) {
        console.log("you are healthy");
    }
    else if (x > 85 || x >= 95) {
        console.log("you are at risk overweight");
    }
    else if (x > 95) {
        console.log("you are overweight");
    }
}
async function getsome() {
    let res = await name();
}
name();
