"use strict";
var figlet = require("figlet");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function p() {
    rl.question(`enter the word`, (input1) => {
        var x = input1;
        rl.close();
        figlet(input1, function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(data);
        });
    });
}
p();
