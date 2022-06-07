
const figlet = require('figlet')
const readline = require ('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
readline.question('inter !!', (answer) => {
    figlet(answer, function (err, data){
     console.log(data)
     readline.close()
    })
});

