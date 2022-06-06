// write a program to take the user's input and print it in a fancy way like this:




var readline = require("readline")
var figlet = require('figlet');

var rl=readline.createInterface(

    process.stdin,process.stdout);
  rl.question ('What is yourrl.question name? ', (rl) => {


    figlet(rl, function(err, rl) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(rl)

    });
  
});
