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
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  * ${data.license}
  
  This project is licensed under the MIT License.
  
  Copyright (c) 2022 Jessica Sisavath
  
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
`;
}

module.exports = generateMarkdown;
