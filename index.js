const questions = require('./lib/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSvg.js');

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('logo.svg', data);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateSvg(data), (error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log("Generated logo.svg");
    });
}

init();



