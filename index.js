const inquirer = require('inquirer');
const fs = require('fs');


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
        name: 'github',
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
          message: 'Write a description about your project:',
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
        type: 'input',
        name: 'repo',
        message: 'What is the link to your github repo?',
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
    ]);
}
console.log('questions ran!'); 
// TODO: Create a function to write README file
/*fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
 }); */


//function writeToFile(fileName, data) {
/*return `
# ${data.title}
# Description
${data.description}
## Table of Contents:
*[Installation](#installation)
*[Usage](#usage)
*[License] (#license)
*[Tests](#tests)
*[Quesions](#questions)

## Deployment
${githublink}
//Demo: https://jessiferizzo.github.io/${data.title}/

![screenshot](./assets/images/Screen%20Shot%202022-04-06%20at%2011.28.13%20PM.png)


## Installation
${data.installation}

  * **Jessica Sisavath**
    [Github Account](https://github.com/Jessiferizzo)

## Usage
${usage}

## License

${data.license}

This project is licensed under the MIT License.

Copyright (c) 2022 Jessica Sisavath

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Contributing
${data.contributing}

##Tests
${data.tests}

##Questions
${data.questions}

## Acknowledgments
${data.acknowledgements}
`;
};*/

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
