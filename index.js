const questions = require('./lib/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSvg.js');

//Invoked when project is run
function init() {
    inquirer.prompt(questions).then((data) => {
        const svgString = generateSvg(data);
        createFile('logo.svg', svgString);
        createFile('index.html', `<html> <body> ${svgString} </body> </html>`);
    })
}

//Creates file
function createFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(`Generated ${fileName}`);
    });
}


init();



