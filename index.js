// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter testing instructions for your project'
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Choose a license for your project:',
            choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email'
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README generated!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
        writeToFile('./dist/README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
