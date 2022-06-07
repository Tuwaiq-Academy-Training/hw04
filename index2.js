var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      name: "age",
      type: "number",
      message: "Please, Enter your age?",
    },
    {
      name: "weight",
      type: "input",
      message: "Please, Enter your weight?",
    },
    {
        name: "height",
        type: "input",
        message: "Please, Enter your height?",
      },
      {
        name: "gender",
        type: "input",
        message: "Please, Enter your gender?",
      },
  ]) 
  .then((answer) => {
      let weight2 = (parseInt(answer.height));
      let BMI = (parseInt(answer.weight))/(Math.pow(weight2, 2));
      BMI = BMI*10000;
      let health;
    if (answer.age >=20){
      if(BMI<16){
        health = 'Severe Thinness';} 
      if(BMI>=16 && BMI <=17){
        health = 'Moderate Thinness';} 
      if(BMI>=17 && BMI <=18.5){
        health = 'Mild Thinness';}   
      if(BMI>=18.5 && BMI <=25){
        health = 'Normal';} 
      if(BMI>=25 && BMI <=30){
        health = 'Overweight';} 
      if(BMI>=30 && BMI <=35){
        health = 'Obese Class I';} 
      if(BMI>=35 && BMI <=40){
        health = 'Obese Class II';} 
      if(BMI>40){
        health = 'Obese Class III';}             
    }
    if (answer.age <20){
        if(BMI<5){
            health ='Underweight';} 
        if(BMI>=5 && BMI<=85){
            health ='Healthy weight';} 
        if(BMI>=85 && BMI<=95){
            health ='At risk of overweight';} 
        if(BMI>95){
            health ='Overweight';} 
    }

    console.log(health);
  });
