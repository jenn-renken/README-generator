// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  }
  if (license === 'Mozilla') {
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `This project uses ${license}`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  #  ${data.title}

  ## Description
   ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
 
  ## Installation
   ${data.installation}

  ## Usage
   ${data.usage}

  ## License
  ${ renderLicenseBadge(data.license) }
  ${ renderLicenseLink(data.license) }
  ${ renderLicenseSection(data.license) }

  ## Contributing
   ${data.github}

  ## Tests
   ${data.tests}

  ## Questions
  Any questions? Please contact me here: ${data.email}
`;
}

module.exports = generateMarkdown;
