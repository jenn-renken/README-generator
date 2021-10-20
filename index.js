// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project'
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
        message: 'Please enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
