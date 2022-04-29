const fs = require('fs');
const licenseArr = ["MIT", "BSD", "GNU", "none"]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license===licenseArr[2]){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license===licenseArr[0]){
      return `Read more about ${licenseArr[0]} here:`
    } else if (license===licenseArr[1]){
      return `Read more about ${licenseArr[1]} here:`
    } else if (license===licenseArr[2]){
      return `Read more about ${licenseArr[2]} here:`
    } else {
      return ""
    }
  }

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
  💾 
  ${data.installation}
  
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
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  Copyright (c) 2022 Jessica Sisavath
`;
}

module.exports = generateMarkdown;
