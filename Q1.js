const { textSync } = require("figlet");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    readline.question(query, resolve);
  });
}
async function main() {
  const string = await question("enter some text\n");
  const fancyString = await textSync(string);
  console.log(fancyString);
  readline.close();
}

main();
