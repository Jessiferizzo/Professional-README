const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center"> ${data.title} </h1>

  ## Description
  ${data.description}

  ## Table of Contents
  * [Deployment](#deployment)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Deployment
  [Project Repo](${data.repo})

  [Project Site](${data.livesite})

  ### Built With:
  ${data.languages}
  
  ## Installation 💾 
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  * ${data.license}
  
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
  
  ## Tests
  ${data.tests}
  
  ## Questions 📫
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubname})
  
  [Email: ${data.email}](mailto:${data.email})
  
  ## Acknowledgments
  ${data.acknowledgements}
`;
}

module.exports = generateMarkdown;