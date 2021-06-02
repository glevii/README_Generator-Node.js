// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

// An array of questions for user input
function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Explain how a user may contribute to your project",
    },
    {
        type: "input",
        name: "tests",
        message: "Explain how to run tests on your project",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for your project?",
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "BSD"],
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
]);
}

promptUser()
.then(function(answers) {
    const readMe = generateMarkDown(answers);
    return fs.writeFileSync("./generatedReadMe/README.md", readMe);
})
.then(function() {
    console.log("Success!");
})
.catch(function(err) {
    console.log(err);
});