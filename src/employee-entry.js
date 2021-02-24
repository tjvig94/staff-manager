const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');

let employees = [];

function init() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the manager for this project:'
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter the id number of this employee:'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter the email address of this employee:'
            },
            {
                name: 'officeNumber',
                type: 'input',
                message: 'Enter the office number for the manager:'            
            },
        ])
        .then(answers => {
            // Create the manager object
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);
            nextEmployee();
        });
};

function makeEngineer() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the engineer:'
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter the id number of this employee:'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter the email address of this employee:'
            },
            {
                name: 'github',
                type: 'input',
                message: 'Enter the github username of this employee:'            
            }
        ])
        .then(answers => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            nextEmployee();
        });
};

function makeIntern() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the engineer:'
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter the id number of this employee:'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter the email address of this employee:'
            },
            {
                name: 'school',
                type: 'input',
                message: 'Enter the school of this employee:'            
            }
        ])
        .then(answers => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
            nextEmployee();
        });
};

function nextEmployee() {
    inquirer
        .prompt([
            {
                name: 'anotherEmployee',
                type: 'list',
                message: 'Enter the type of employee you would like to enter, or exit:',
                choices: ['Engineer', 'Intern', 'Exit'] 
             }
        ])
        .then(answers => {
            if (answers.anotherEmployee == "Engineer") {
                makeEngineer();
            } else if (answers.anotherEmployee == "Intern") {
                makeIntern();
            } else if (answers.anotherEmployee == "Exit") {
               console.log(employees);
            };
        });
};

function generatePage(...employees) {
    employees.forEach(employee => {
        let employeeCard = 
    });
}

module.exports = init();

