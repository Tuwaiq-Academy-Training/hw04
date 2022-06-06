//---------------------------Home Work 4 
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}


//---------------------------Exersice 1:Fancy Drawer 

async function printWord(){
    var figlet = require('figlet');
    let sentnce= await question('Please Ente sentence ?');
    figlet(sentnce, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}
printWord(); 


//---------------------------Exersice 2:BMI App

const inquirer = require("inquirer")
inquirer
    .prompt([
      {
        name: "age",
        type: "number",
        message: "How old are you?",
      },
      {
        name: "weight",
        type: "number",
        message: "How much your weight?",
      },
      {
          name: "height",
          type: "number",
          message: "How much your height?",
        },
        {
          name: "gender",
          type: "string",
          message: "Male or female ?",
        },
    ])
    .then((answer) => {
		let heightt=answer.height;
		let heighttt =Math.pow(heightt,2); 
		let  equation =(answer.weight/heighttt)*10000; 
		 if(answer.age>=20){
			  if(equation<16){
				  console.log("Severe Thinness");
			  }
			  else if(equation>=16 && equation<=17){
				  console.log("Moderate Thinness")
			  }else if (equation>=17 && equation<=18.5){
				  console.log("Mild Thinness")
			  }else if (equation>=18.5 && equation<=25){
				  console.log("Normal")
			  }else if (equation>=25 && equation<=30){
				  console.log("Overweight")
			  }else if (equation>=30 && equation<=35){
				  console.log("Obese Class I")
			  }else if (equation>=35 && equation<=40){
				  console.log("Obese Class II")
			  }else if (equation>40){
				  console.log("Obese Class III")
			  }
		 }
		else if(answer.age>=2&&answer.age<=20){
		  if(equation<5){
			  console.log("Severe Thinness");
		  }
		  else if(equation>=5&& equation<=85){
			  console.log("Moderate Thinness")
		  }else if (equation>=85 && equation<=95){
			  console.log("Mild Thinness")
		  }else if (equation>95){
			  console.log("Normal")
	   }
  
	  }
 });
//-------------------Exersice 3 :Shapes in the terminal

const { Terminal } = require('command-line-draw');

const terminal = new Terminal();

terminal.bitmap(0, 0, [
  [true, true, true],
  [true, false, true],
  [true, false, true],
  [true, false, true],
  [true, true, true]
]);
