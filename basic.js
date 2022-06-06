//using the Inquirer package, ask the user multiple questions about their age ,weight, height and gender,


const Inquirer = require("inquirer");

Inquirer
.prompt([
{
 name :"user_age",
 type: "input",
 message:"Enter the age?"

 //weight: 'Enter the weight? ',
 //height : 'Enter the height? ',
 //gender :'Enter the gender? ' //gender

},
{
name: "user_weight" ,
type:"input",
message:"Enter the weight?"
,},
{
name:"user_height" ,
type:"input",
message:"Enter the height", 

},
{
    name: "user_gender" ,
type:"input",
message:"Enter the gender",

},

])
.then((answer) =>{
    console.log(answer.user_age,answer.user_weight,
        answer.user_height,answer.user_gender
        );
//});

//calculate the BMI using this equation = weight/height^2 
//determain if they are healthy of not depending on their age using the table



let bml =answer.user_weight/answer.user_height^2;

if (answer.user_age>=20){


    if(bml <16){
        console.log("Severe Thinness");
    }else if (bml>=16 && bml<= 17 ){
        console.log("Moderate Thinness");
    }else if(bml>=17 && bml<= 18  ){
        console.log("Mild Thinnes");

    }else if( bml>=18 && bml<= 25){
        console.log(" Normal");
    }else if(bml>=25 && bml<= 30 ){
        console.log("Overweight");
    } else if( bml>=30 && bml<= 35){
        console.log("Obese Class I");

    }else if(bml>=35 && bml<= 40 ){
            console.log(" Obese Class II  ");

        }else if( bml > 40);{
                console.log(" Obese Class III  ");
            }
        }



        if (answer.user_age,+20){

if(bml <=5){
        console.log(" Underweight ") ;  
    }else if(bml>=5 && bml<= 85 ){
        console.log(" Healthy weight ");
    }else if(bml>=85 && bml<= 95 ){
        console.log(" At risk of overweigh ")
}else if(bml>=95 ){
    console.log(" Overweight ")


}}

});
