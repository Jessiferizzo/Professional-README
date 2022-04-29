const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return ` ${data.badge}=[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`;
  } else (license==='none')
    return '';
}

console.log (renderLicenseBadge);

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
  * [Site](#site)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Site 
  [Project Repo](${data.repo})

  [Project Site](${data.livesite})

  ### Built With:
  ${data.languages}
  
  ## Installation
  💾  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubname})

  [Email: ${data.email}](mailto:${data.email})
  
  ## Acknowledgments
  ${data.acknowledgements}

  ## License
  ${data.badge}
  * ${data.license}

  This project is licensed under the MIT License.
  
  Copyright (c) 2022 Jessica Sisavath
`;
}

module.exports = generateMarkdown;
