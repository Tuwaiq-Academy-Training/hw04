const inquirer = require('inquirer');

// inquirer
//   .prompt
const questions =([

    {
      type: 'input',
      name: 'gender',
      message: 'Whats your gender?',
      ValidDate: (answers => {
        if(isNaN(answers)){
          return 'Please enter a gender'
        }
        return true
      })
    },


    {
      type: 'input',
      name: 'old',
      message: 'How old are You?',
      ValidDate: (answers => {
        if(isNaN(answers)){
          return 'Please enter a valid number'
        }
        return true
      })
    },{
      type: 'input',
      name: 'weigh',
      message: 'How much do you weigh?',
      ValidDate: (answers => {
        if(isNaN(answers)){
          return 'Please enter a valid number'
        }
        return true
      })
    },{
    type: 'input',
    name: 'height',
    message: 'How much your Length?',
    ValidDate: (answers => {
      if(isNaN(answers)){
        return 'Please enter a valid number'
      }
      return true
    })
}

  ])
  // .then(answers => {
  //   console.log( answers);
  // });

  console.log('bmi calculator');

  inquirer

.prompt(questions)
.then(answers => {
  const gender = answers.gender;
  const old = answers.old;
  const weight = answers.weight; 
  const height = answers.height;
  const bmi =  weight / (height**2);
  if(bmi < 40){
          console.log ("Obese Class III");
        }else if ( 35 < bmi < 40){
          console.log("Obese Class II") ;
        }else if (30 < bmi < 35){
          console.log ("Obese Class I");
        }else if (25 < bmi < 30){
          console.log ("Oveweight");
        }else if (18.5 < bmi < 25){
          console.log ("Normal");
    }else if (17 < bmi < 18.5){
              console.log ("Mild Thinness	");
        }else if (16 < bmi < 17){
         console.log ("Moderate Thinness	");
        }else if (bmi < 16){
              console.log ("Severe Thinness");
          }  else if (bmi < 5){
               console.log( "Underweight");     
          }else if (5 < bmi < 85){
            console.log ("Healthy weight");
             }  else if (85 < bmi < 95){
                console.log ("At risk of overweight");
              } else if (bmi < 95){
                    console.log( "Oveweight");
        }else{
          console.log ("Obese");
        }
      }
)



























//   function bmi(weight, height) {
//     let bmi = weight / (height**2);

//     if(bmi < 40){
//       return "Obese Class III";
//     }else if ( 35 < bmi < 40){
//       return "Obese Class II";
//     }else if (30 < bmi < 35){
//       return "Obese Class I";
//     }else if (25 < bmi < 30){
//         return "Oveweight";
//     }else if (18.5 < bmi < 25){
//   return "Normal";
// }else if (17 < bmi < 18.5){
//           return "Mild Thinness	";
//     }else if (16 < bmi < 17){
//      return "Moderate Thinness	";
//     }else if (bmi < 16){
//           return "Severe Thinness";
//       }  else if (bmi < 5){
//            return "Underweight";     
//       }else if (5 < bmi < 85){
//         return "Healthy weight";
//          }  else if (85 < bmi < 95){
//             return "At risk of overweight";
//           } else if (bmi < 95){
//                 return "Oveweight";
//     }else{
//       return "Obese";
//     }
//   }


