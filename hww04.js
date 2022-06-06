/*"use strict";
//const ps = require("prompt-sync");
//const prompt = ps();*/

var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
{
    name : "userage",
    type: "number",
    message:"Enter your age"
},
{
  name:"userweight",
  type:"number",
  message:"Enter your wight:"
},
{
name:"userhight",
type:"number",
message:"Enter your hight:"
},
{
    name:"usergender",
    type:"input",
    message:"Enter your gender:"
}
  ])
  .then((answers) => {
      console.log(answers.userage,answers.userweight,answers.userhight,answers.usergender)
    // Use user feedback for... whatever!!
    let weight = "userweight";
    let height = "userhight"; 
    const equation = weight/height^2;

    if(answers.userage >=20){
                                
      if(equation < 16){
        console.log("Severe Thinness");
    }else if(16 >= equation<= 17){
        console.log("Moderate Thinness");
    }else if(17 >= equation <= 18.5){
      console.log("Mild Thinness");
    }else if(18.5 >=equation <= 25){
        console.log("Normal");
    }else if(25 >= equation <= 30){
        console.log("Overweight	");
    }else if(30>=equation<=35){
      console.log("Obese Class I");
    }else if(35>= equation <= 40 ){
        console.log("Obese Class II	");
    }else if(equation > 40 ){
        console.log("Obese Class III");
    }
    }
    let Percentile_Range=equation*100;

    if(Percentile_Range <5){
    console.log("Underweight");
    }else if(5>=Percentile_Range <= 85){
        console.log("Healthy weight	");
    }else if(85>= Percentile_Range<= 95){
     console.log("At risk of overweight	");
    }else if(Percentile_Range  > 95){
}

});


  
  