//Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = require("./utils/licenses.js");

//Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What would you like to name your project?"
    },
    {
        name: "description",
        message: "Please describe your project. (Try to include at least 3-5 sentences)"
    },
    {
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        name: "usage",
        message: "Please provide instructions and examples for how to use your project. Screenshots and gifs should be added as needed after completion of this template."
    },
    {
        name: "credits",
        message: "Please list any third-party assets that you used that require attribution and any tutorials that you may have followed."
    },
    {
        name: "contributing",
        message: "Please list any collaborators that worked on this project with you, along with links to their GitHub profiles."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: Object.keys(licenses),
        loop: false
    },
    {
        name: "github",
        message: "Please enter your GitHub username."
    },
    {
        name: "email",
        message: "Please enter your email address."
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully created generated-README.md!')
    );
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        let userInput = generateMarkdown(answers);
        writeToFile("generated-README.md", userInput);
    })

}

// Function call to initialize app
init();

