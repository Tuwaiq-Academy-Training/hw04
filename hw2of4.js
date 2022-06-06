var inquirer = require('inquirer');

inquirer
.prompt([{name: 'age',
          type:'input',
          messege:'Enter your age: '},

{name:'ur_weight',
type:'input',
message:'Enter your weight'},

{name:'ur_height',
type:'input',
message:'Enter your height'},

{name:'your_gender',
type:'input',
messege:'Enter your gender: '}
])

.then((answer)=>{

  let BMI=answer.ur_weight/answer.ur_height*answer.ur_height;


  console.log(BMI);
  if(answer.age>=20){
    if(BMI<16){
      console.log('Severe Thinness');
    }else if(BMI>=16&&BMI<=17){
      console.log('Moderate Thinness');
    }else if(BMI>=17&&BMI<=18.5){
      console.log('Mild Thinness');
    }else if(BMI>=18&&BMI<=25){
      console.log('Normal');
    }else if(BMI>=25&&BMI<=30){
      console.log('Overweight');
    }else if(BMI>=30&&BMI<=35){
      console.log('Obese Class I');
    }else if(BMI>=35&&BMI<=40){
      console.log('Obese Class II');
    }
    else if(BMI>40){
      console.log('Obese Class III');
    }
  }
let PercentileRange=BMI*100;

  if(answer.age>2&&answer<20){
     if(PercentileRange<5){
      console.log('Underweight');

     }
     else if(PercentileRange>=5&&PercentileRange<=85)
{
  if(PercentileRange<5){
    console.log('Healthy weight	');

   }
   else if (PercentileRange>=85&& PercentileRange<=95){
     console.log('At risk of overweight	');
   }
else if(PercentileRange>=95)
{
  console.log('Overweight	');
}
}


  }
  
});

