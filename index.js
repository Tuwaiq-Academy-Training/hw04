const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});	
}

async function run(){
 let sentence = await question('Enter a sentence:? ');
 var figlet = require('figlet');
 figlet(sentence, function(err, data) {
     if (err) {
         console.log('Something went wrong...');
         console.dir(err);
         return;
     }
     console.log(data)
      console.log('Thank You for playing :)');
 });
 readline.close();
}
run();
