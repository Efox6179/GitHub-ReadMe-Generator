// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'imput',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter a project title.'}
    }
},

{
    type: 'imput',
    name: 'description',
    message: 'Please enter a breif description of your project.',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter a descriptiom.'}
    }
},

{
    type: 'imput',
    name: 'instructions',
    message: 'How do you install your project?',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter instructions on how to install project.'}
    }
},

{
    type: 'imput',
    name: 'usage',
    message: 'How is this project used?',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter how this project is used.'}
    }
},

{
    type: 'imput',
    name: 'contribution',
    message: 'Please enter contribution guidelines.',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter contribution guidelines.'}
    }
},

{
    type: 'imput',
    name: 'testing',
    message: 'How does someone test this project?',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter testing instructions.'}
    }
},

{
    type: 'list',
    name: 'licenses',
    message: 'Please choose a license for your project. ',
    choices: ["None", "Apache_2.0", "BSD_3", "GPLv3", "AGPL_v3", "LGPL_v3", "FDL_v1.3", "MIT", "MPL_2.0"]

},

{
    type: 'input',
    name: 'github', 
    message: 'What is your GitHub username?',
    validate: (value) => {
        if (value) { return true } 
        else { return 'Please enter your GitHub username.'}
    }

},

{
    type: 'imput',
    name: 'email', 
    message: 'What is your email address?',
    validate: (value) =>{
        if (value) { return true } 
        else { return 'Please enter an email address.'}
    }
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){

        if (error) {
            console.log(error);

        }
        else{
            console.log('✅ ReadMe.md Created');
        }
    })
};

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(function (data) {
    writeToFile("ReadMe.md", generateMarkdown(data));
})
};
// Function call to initialize app
init();