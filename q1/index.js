
  const readline = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
  });
  const  figlet = require('figlet');
  readline.question('please insert any word ',(word) => {
      figlet(word,function(err,data){
console.log(data)
readline.close()
      })
  })

       function dd(){
     console.log("hello")
}

console.log("hello")
console.log("hello")
console.log("hello")
  
  