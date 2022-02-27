

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licenses:
[![license](https://img.shields.io/badge/license-${data.licenses})](https://shields.io)

## Table of contents

-  [Description](#description)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Contribution](#contribution)
-  [Testing](#testing)
-  [Contact Me](#contactme)

## Description:
${data.description}

## Installation:
${data.instructions}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Testing:
${data.testing}

## Contact Me:
Check out my other [Projects](https://github.com/${data.github}?tab=repositories)

Feel free to shoot me an [Email](mailto:${data.email}) 

`;
}

module.exports = generateMarkdown;