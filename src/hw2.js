var inquirer = require('inquirer');
const { message } = require('prompt');
inquirer
  .prompt([{
      name:"age",
      message:"What is your age",
      type:"input"
     },
     {
        name:"weight",
        message:"what is yor wight",
        type:"input"
       },
       {
          name:"height",
          message:"wath is your height",
          type:"input"
         }
  ])
  .then((answer) => {
   let BMIrange=(answer.weight/Math.pow(answer.height,2))*100
   if(answer.age >= 20){
if (BMIrange<16){
    console.log('Severe Thinness')
}
if (BMIrange<=16&&BMIrange>=17){
    console.log('Moderate Thinness')
}
if (BMIrange<17&&BMIrange>=18.5){
    console.log('Mild Thinness')
}
if (BMIrange<18.5 &&BMIrange>=25){
    console.log('Normal')
}
if (BMIrange<25&&BMIrange>=30){
    console.log('Overweight')
}
if (BMIrange<30&&BMIrange>=35){
    console.log('Obese Class I')
}
if (BMIrange<35&&BMIrange>=40){
    console.log('Obese Class II')
}
if (BMIrange>40){
    console.log('Obese Class III')
}
   }
   else if(answer.age <= 20){
    if (BMIrange<5){
        console.log('Underweight')
    }
    if (BMIrange<5&&BMIrange>=85){
        console.log('Healthy weight')
    }
    if (BMIrange<85&&BMIrange>=95){
        console.log('At risk of overweight')
    }
    if (BMIrange<95){
        console.log('Overweight')
    }
   }
  });


