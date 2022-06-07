var figlet = require('figlet');
var inquirer = require('inquirer');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('enter sentence', name => {
    figlet(name, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    console.log(` ${name}!`);
    readline.close();
  });



