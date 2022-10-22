//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = require("./licenses.js")

function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
    else {
      let licenseLink = renderLicenseLink(license);
      let licenseImg = renderLicenseImg(license);
        
      let badge = `[![License](${licenseImg})](${licenseLink})`;
      return badge;
    }
}

//Function that returns link to license badge img
function renderLicenseImg(license) {
  let licenseImg = licenses[license].licenseImg
  return licenseImg;
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = licenses[license].licenseLink;
  if (license === "None") {
    licenseLink = "";
  }
    else {
      licenseLink = licenses[license].licenseLink;
    }
  return licenseLink;
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  if (license === "None") {
    licenseSection = "";
  }
    else {
      let licenseLink = renderLicenseLink(license);
      licenseSection = `This application is covered under the license: [${license}](${licenseLink})`
    }
  return licenseSection;
}

//Create a function to generate markdown for README
function generateMarkdown(data) {

  let badgeString = renderLicenseBadge(data.license);
  let licenseSectionString = renderLicenseSection(data.license);


  let markdown = 
  `# ${data.title}

  ${badgeString}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Credits] (#credits)
  - [Contributing] (#contributing)
  - [License] (#license)
  - [Questions] (#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Contributing
  ${data.contributing}

  ## License
  ${licenseSectionString}

  ##Questions

  For questions, please reach out to me at:
    - [Email] (${data.email})
    - [GitHub] (https://github.com/${data.github})

  `;

  return markdown;
}

module.exports = generateMarkdown;
