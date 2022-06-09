const inquirer = require("inquirer");
const main = async () => {
  const { age, weight, height, gender } = await inquirer.prompt([
    {
      name: "age",
      type: "number",
      message: "Enter your age?",
    },
    {
      name: "weight",
      type: "input",
      message: "Enter your weight?",
    },
    {
      name: "height",
      type: "input",
      message: "Enter your height?",
    },
    {
      name: "gender",
      type: "input",
      message: "Enter your gender?",
    },
  ]);

  let bmi = (weight / (height/100) ** 2);
  const BMI_Desc = {
    above: {
      13: "Severe Thinness",
      16: "Moderate Thinness",
      17: "Mild Thinness",
      18.5: "Normal",
      25: "Overweight",
      30: "Obese Class I",
      35: "Obese Class II",
      40: "Obese Class III",
    },
    under: {
      5: "Underweight",
      10: "Healthy weight",
      85: "At risk of overweight",
      95: "Overweight",
    },
  };
  const numbers = Object.keys(BMI_Desc[age < 20 ? "under" : "above"]);
  numbers.sort((item) => item - bmi);
  console.log(numbers,bmi);

  console.log(BMI_Desc[age < 20 ? "under" : "above"][numbers[0]]);
};
main();
