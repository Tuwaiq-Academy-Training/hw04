
var inquirer = require('inquirer');
inquirer
  .prompt([{
   name: "age",
   type:"input",
   massage:"what your age?",
  },
  {name: "weight",
   type:"input",
   massage:"what your weight?",
  },
  {name: "hight",
  type:"input",
  massage:"what your hight?",
 },
])
.then(answers => {
    let BMI =(answers.weight/Math.pow(answers.weight,2)*10000);
    if(answers.age>=20){
        if(BMI<16){
			console.log('Severe Thinness');
		}
		if(BMI<=17 && BMI>=16){
			console.log('Moderate Thinness');
		}
		if(BMI<=17 && BMI>=18.5){
			console.log('Mild Thinness');
		}
		if(BMI<=18.5 && BMI<=25){
			console.log('Normal');
		}
		if(BMI<=25 && BMI<=30){
			console.log('Overweight');
		}
		if (BMI<=30 && BMI<=35){
			console.log('Obese Class I');
		}
		if(BMI<=35 && BMI<=40){
			console.log('Obese Class II');
		}
		if(BMI > 40){
			console.log('Obese Class III');
		}
	else if(answers.user_age<20){
		if(BMI<5){
			console.log('Underweight');
		}
		if(BMI<=85 && BMI>=5){
			console.log('Healthy weight');
		}
		if(BMI<=95 && BMI>=85){
			console.log('At risk of overweight');
		}
		if(BMI<95){
			console.log('Overweight');
		}}}
	});
	