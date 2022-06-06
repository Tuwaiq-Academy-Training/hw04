// var readline =require('readline');

var inquirer = require('inquirer');
function calculate (answers){
    let BMI=(answers.weight/Math.pow(answers.height/100,2).toFixed(1))//*100
    console.log(BMI,'%')
    if (BMI<16 &&answers.age>=20){
        console.log("Severe Thinness")
    }else if(BMI >16 && BMI<=17 && answers.age>=20){
        console.log("Moderate Thinness	")

    }else if (BMI >18.5 && BMI<=25 &&answers.age>=20){
        console.log("Normal	")
    }
    else if (BMI >25 && BMI<=30 && answers.age>=20){
        console.log("Overweight	")
    }else if (BMI >30 && BMI<=35 && answers.age>=20){
        console.log("Obese Class I		")
    }
	else if (BMI >35 && BMI<=40 && answers.age>=20){
        console.log("Obese Class II	")
    }
	else if (BMI >40  && answers.age>=20){
        console.log("Obese Class III")
    }
	else if(BMI <=5  && answers.age>2 && answers.age<20){
        console.log("Underweight")

	}
	else if(BMI >5 && BMI <85 && answers.age>2 && answers.age<20){
        console.log("Healthy weight	")

	}
	else if(BMI >85 && BMI <95 && answers.age>2 && answers.age<20){
        console.log("At risk of overweight	")

	}
	else if(BMI >95 && answers.age>2 && answers.age<20){
        console.log("Overweight")

	}
}
// const { type } = require('os');
// var data = readline.createInterface(
//     process.stdin, process.stdout);
//   const age= data.question('enter your age', (age) => {
//     const weight= data.question('enter your weight', (weight) => {
//         const height= data.question('enter your height', (height) => {
//             const gender= data.question('enter your gender', (gender) => {

inquirer.prompt([
    {
        name: 'age',
        type: 'input',
        message: "what is your age ?"
    }
    ,{
        name: 'weight',
        type: 'input ',
        message: 'what is your weight'
    },
    { 
        name: 'height',
        type: 'input',
        message: 'what us your height'

    },
    {
        name: 'gender',
        type: 'input',
        message: 'what is your gender'
        
    }])

.then((answers) => {
calculate(answers)

    // Use user feedback for... whatever!!
    // console.log(answers.age)
})