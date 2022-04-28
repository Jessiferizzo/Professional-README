const inquirer = require('inquirer');
const fs = require('fs');
const util= require ('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Include packages needed for this application
//added inquirer
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'githubname',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
          type: 'input',
          name: 'description',
          message: 'Write short description about what was your motivation, why did you build this project, what problem does it solve, what did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'BSD', 'GNU public license','none']
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with?',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'repo',
        message: 'What is the link to this projects github repo?',
      },
      {
        type: 'input',
        name: 'livesite',
        message: 'What is the link to your live site URL?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know in regards to contributing to this repo?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
      },
      {
        type: 'input',
        name: 'acknowledgements',
        message: 'Who did you want to acknowledge?',
      },
    ])
};

/*generateMarkdown(); 
console.log('ran markdown');

questions().then((data) => writeToFile (generatedREADME,
generateMarkdown(data))) 
.then(() => console.log ('Successfully wrote README'))
.catch((err) => console.log(err));*/

async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await questions();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }

// TODO: Create a function to write README file
/*const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'ReadME created!'
            });
        });
    });
};*/


// TODO: Create a function to initialize app
/*function init() {
    return inquirer.prompt(questions)
    .then(data => {
        return data;
    })
}*/

// Function call to initialize app
init();
