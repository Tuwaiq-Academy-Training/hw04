

var inquirer = require('inquirer');
inquirer
  .prompt([
      {
          name: 'ageOfUser',
          type: 'input',
          msg: 'what is the user age?'
      },
      {
        name: 'wightOfUser',
        type: 'input',
        msg: 'what is the user width'
    },
    {
        name: 'hightOfUser',
        type: 'input',
        msg: 'what is the user height'
    }  
  ])
  .then((answers) => {
    let BMI =(answers.wightOfUser/Math.pow(answers.hightOfUser,2)*10000);
    BMI=Math.round(BMI);
    if(answers.ageOfUser>=20){
      switch(BMI){
        case 16:
          console.log('Severe Thinness');
        break;
        case 17 || 16:
         	console.log('Moderate Thinness');
        break;
        case 18.5||18:
          console.log('Mild Thinness');
          break;
        case 19||19.5||20:  
        console.log('Normal');
           break;
        case 21||22:  
        console.log('Normal');
           break;   
        case 23||24||25:
          console.log('Normal');
              break;
        case 26||27||28||29||30:
          console.log('Overweight');
          break;
        case  30||31||32||33||34||35:
          console.log('Obese Class I');
          break;
        case 36||37||38||39||40:
          console.log('Obese Class II');
          break;
        case 40:
          console.log('Obese Class III');
          break;
      }
} 
if(answers.ageOfUser<20){    
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
		}}
	});