"use strict";
const ps = require("prompt-sync");
const prompt = ps();


const sentence = prompt("enter a sentence: ");
console.log("Hello");


var figlet = require('figlet');

figlet(sentence, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
   
});



console.log("Thank You for playing");