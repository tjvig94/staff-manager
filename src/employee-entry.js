// const Employee = require('lib\Employee.js');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter employee name:'
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is the role of this employee?',
            choices: ['Engineer', 'Intern', 'Manager']
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
        }
    ])
    .then(input => {
        
    }
    )

