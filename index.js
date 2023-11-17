// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        message: "What is your project title name?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the projects description?",
        name: "description",
      },
      {
        type: "input",
        message: "Installation instructions",
        name: "installation",
      },
      {
        type: "input",
        message: "Usage information",
        name: "usage",
      },
      {
        type: "input",
        message: "Contributors",
        name: "Contributor",
      },
      {
        type: "input",
        message: "Test Instructions",
        name: "test",
      },
      {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => console.log(err),
        console.log("README.md successfully created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("My-ReadMe.md", generateMarkdown(data)); 
        })
        .catch((err) => console.log(err)); 
}

// Function call to initialize app
init();
