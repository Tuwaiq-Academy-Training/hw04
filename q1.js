"use strict";

const ps = require("prompt-sync");
const prompt = ps();


let name = prompt('Enter the name : ');

var figlet = require('figlet');

figlet(name, function(err, name) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(name);
});