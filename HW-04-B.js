const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'MOsab',
      message: 'What is your favorite reptile?',
      default: '050505'
    },
    {
      name: 'Essa',
      message: 'What is your favorite color?',
      default: '#0606060'
    },
  ])
  .then(answers => {
    console.info('Answers:', answers);
  });