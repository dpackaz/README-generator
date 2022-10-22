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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );