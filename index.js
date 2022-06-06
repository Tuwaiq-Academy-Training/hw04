var figlet = require('figlet');
var readline = require('readline');
var data = readline.createInterface(
    process.stdin, process.stdout);
    data.question('enter your name', (data) => {
figlet(data, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    process.exit()

});

});