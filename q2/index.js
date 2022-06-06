 
  const  inquirer = require('inquirer');
  inquirer
  
.prompt([{
    name : "age",
    message : "how old are you",
    default : "example 20..." ,
    
  },
  {
    name: "weight",
    message : "enter your weight ",
    default : "example 80,90..." ,

  },
  {
      name : "height",
    message : "enter your height ",
    default : "example 170,180..." ,

  }
])
  .then (answer =>{
   let BMI = (answer.weight/Math.pow(answer.height,2))*10000;
    if(answer.weight >0 && answer.height >0){ 
        console.log(BMI)
      }
      if(answer.age >= 20 && BMI < 16){
        console.log('Severe Thinness')
    }
    if(answer.age >= 20 && 17 > BMI >16 ){
        console.log('Moderate Thinness')
    }
    if(answer.age >= 20 && 18.5 > BMI >17 ){
        console.log('Mild Thinness')
    }
    if(answer.age >= 20 && 25 > BMI >18.5 ){
        console.log('Normal	')
    }
    if(answer.age >= 20 && 30 > BMI > 25 ){
        console.log('Overweight	')
    }
    if(answer.age >= 20 && 35 > BMI > 30 ){
        console.log('Obese Class I	')
    }
    if(answer.age >= 20 && 40 > BMI > 35 ){
        console.log('Obese Class II	')
    }
    if(answer.age >= 20 &&  BMI > 40  ){
        console.log('Obese Class III')
    }
    if(2 <= answer.age <=20 && BMI < 5 ){
        console.log('Underweight')
    }
    if(2 <= answer.age <=20 &&  85 < BMI < 5 ){
        console.log('Healthy weight')
    }
    if(2 <= answer.age <=20 &&  95 < BMI > 85 ){
        console.log('At risk of overweight	')
    }
    if(2 <= answer.age <=20 && BMI > 95 ){
        console.log('Overweight')
    }
    
    answer.weight,answer.height

})

  




  