// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = require("./utils/licenses.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        message: "What would you like to name your project?"
    },
    {
        name: "Description",
        message: "Please describe your project. (Try to include at least 3-5 sentences)"
    },
    {
        name: "Installation",
        message: "What are the steps required to install your project?"
    },
    {
        name: "Usage",
        message: "Please provide instructions and examples for how to use your project. Screenshots and gifs can be added as needed after completion of this template."
    },
    {
        name: "Credits",
        message: "Please list any third-party assets that you used that require attribution and any tutorials that you may have followed."
    },
    {
        name: "Contributing",
        message: "Please list any collaborators that worked on this project with you, along with links to their GitHub profiles."
    },
    {
        type: "list",
        name: "License",
        message: "Please choose a license for your project."
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





















// From miniproject

const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>About Me <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">My LinkedIn url is ${answers.linkedin}</li>
      <li class="list-group-item">My favorite food is ${answers.food}</li>
      <li class="list-group-item">My favorite hobby is ${answers.hobby}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// end miniproject









//From npmjs.com

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




//From Classwork:

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'method',
    },
  ])
  .then((response) => {
    console.log(response)
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Please complete all inputs')
  }
  );