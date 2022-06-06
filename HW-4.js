var figlet = require('figlet');

const x =require("prompt-sync");
const prompt= x ();

var inquirer = require('inquirer');
inquirer

// prit in a fancy way
function fancy(){
const world =(prompt('Enter a sentance : '))
figlet(world, function(x, data) {
    if (x) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});}

//********************************************************************************************************* */
// use inquirer pacage 
function BMI (){
    inquirer
    .prompt([
      {
        name: "user_age",
        type: "input",
        message: "What is your age?",
      },
      {
       name: "user_weight",
        type: "input",
        message: "What is your weight?",
      },
    
      {
        name: "user_hight",
         type: "input",
         message: "What is your hight?",
       },
    ])
    .then((answer) => {
        let BMI=(answer.user_weight/Math.pow(answer.user_hight,2)*10000)
        if(answer.user_age>=20){
    
            if(BMI<16){
                console.log("Severe Thinness");
            }
            if(BMI<=17&& BMI>=16){
                console.log("Moderate Thinness");
            }
            if(BMI<=18.8&& BMI>=17){
                console.log("Mild Thinness");
            }
            if(BMI<=25&& BMI>=18.5){
                console.log("Overweight");
            }
            if(BMI<=30&& BMI>=25){
                console.log("Obese Class I");
            }
            if(BMI<=40&& BMI>=35){
                console.log("Obese Class II");
            }
            if(BMI>40){
                console.log("Obese Class III");
            }
        }
        else if(answer.user_age<20){
            if(BMI<5){
                console.log("Underweight");
            }
            if(BMI<=85 && BMI>=5){
                console.log("Healthy weight");
            }
            if(BMI<=95 && BMI>=85){
                console.log("At risk of overweight");
            }
            if(BMI>95){
                console.log("Overweight");
            }
        }
        
        
    
    }); 
    }
    //****************************************************************************************** */
    //drow a shape
    function shape(){
    var render = require('surrender')({
        from : [ [ -1, 1 ], [ -1, 1 ] ]
    });
     
    render
        .line([ -0.7, 0 ], [ 0, -0.5 ])
        .line([ 0, -0.5 ], [ 0.7, 0 ])
        .line([ 0.7, 0 ], [ 0, 0.5 ])
        .line([ 0, 0.5 ], [ -0.7, 0 ])
    ;
    }
    
    /////please call the function -_-
    
    //fancy();
    
    //BMI ()
    
    //shape()