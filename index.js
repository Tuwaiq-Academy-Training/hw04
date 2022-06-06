const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}
async function readbyuser(){
var figlet = require('figlet');
let result=await question('enter your name :');

figlet(result, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});}
readbyuser();