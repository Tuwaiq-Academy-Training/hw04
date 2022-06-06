var figlet = require("figlet");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function p() {
  rl.question(`enter the word`, (input1: any) => {
    var x = input1;
    rl.close();
    figlet(input1, function (err: any, data: any) {
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
