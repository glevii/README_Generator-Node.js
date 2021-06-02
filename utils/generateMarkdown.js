function licenseBadge(answers) {
  if (answers.license === "MIT") {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (answers.license === "GNU GPLv3") {
  license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (answers.license === "Apache License 2.0") {
  license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (answers.license === "BSD") {
  license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
}



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge = (license) => {

// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(answers) {
  if (answers.license === "MIT") {
    return "Licensed under the MIT license."
  }
  else if (answers.license === "GNU GPLv3") {
    return "Licensed under the GNU GPLv3 license."
  }
  else if (answers.license === "Apache License 2.0") {
    return "Licensed under the Apache License 2.0. license."
  }
  else if (answers.license === "BSD") {
    return "Licensed under the BSD license."
  }
 }

// // TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ${licenseBadge(answers)}

  ## Table of Contents
  - [Description](#Description) <br>
  - [Installation](#Installation) <br>
  - [Contributing](#Contributing) <br>
  - [Usage](#Usage) <br>
  - [Tests](#Tests) <br>
  - [License](#Questions) <br>
  - [Questions](#Questions) <br>

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Contributing
  ${answers.contributing}

  ## Usage
  ${answers.usage}

  ## Tests
  ${answers.tests}

  ## License
  ${licenseSection(answers)}

  ## Questions
  Please direct any questions to ${answers.email}
  Connect with me at https://github.com/${answers.githubUsername}
`;
}

module.exports = generateMarkdown;
