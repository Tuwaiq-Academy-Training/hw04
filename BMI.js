var inquirer = require('inquirer');


const questions = [
    {
      type: 'input',
      name: 'weight',
      message: "What's your weight",
    },
    {
      type: 'input',
      name: 'height',
      message: "What's your height",
      default() {
        return 'Doe';
      },
    },
    {
      type: 'input',
      name: 'age',
      message: "What's your age",
    }
    ]  

inquirer
.prompt(questions
   
)
  .then((answers) => {
      const weight = answers.weight
      const height = answers.height
const age = answers.age
const result = (weight/(height * height)) * 100

if (result < 16) {
    console.log("Severe Thinness")
} else if ( 16 > result > 17 ) { 
 console.log("Moderate Thinness")
} else if ( 17 > result > 18.5) { 
    console.log(" Thinness")
} else if ( 18.5 > result > 25) { 
    console.log("normal")
} else if ( 25 > result > 30) {
    console.log("Overweight")
} else if ( 30 > result > 35) {
    console.log("obese class I")
} else if ( result > 40) { 
    console.log("Obese Class III")
}

if (age > 20 && result <5) {
    console.log("Underweight")
} else if ( age > 20 && 5 > result > 85 ) { 
    console.log("healthy")
} else if (age > 20 && 85 > result > 95 ) { 
    console.log("risk of overweight")
} else if ( age > 20 && result > 95){
    console.log("overweight")
}
    

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });