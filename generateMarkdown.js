function generateReadme(answers) {
    return `
# ${answers.projectName}
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
[![license](https://img.shields.io/badge/license-${answers.license}-blue)](https://shields.io)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}<br />
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me: ${answers.email}<br /><br />
    `;
  }
  
  module.exports = generateReadme;