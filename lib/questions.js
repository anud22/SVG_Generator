const questions = [
    {
        type: 'input',
        message: 'Enter text up to three characters',
        name: 'text',
        validate: function (input) {
            if (input.length < 3) {
                return 'Please enter text up to three characters';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter text color keyword or a hexadecimal number',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'Enter shape color keyword or a hexadecimal number',
        name: 'shapeColor'
    },
]
module.exports = questions;