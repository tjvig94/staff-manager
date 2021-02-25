const inquirer = require("inquirer");
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const pagecontent = require('./pagecontent');

let employees = {
    managers: [],
    engineers: [],
    interns: []
};

exports.init = () => {
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
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); // Create the manager object
            employees.managers.push(manager); //add manager to the array of managers in the employees object
            nextEmployee(); // prompt user if they want to add another employee
        });    
}

const makeEngineer = () => {
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
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); //create new engineer object
        employees.engineers.push(engineer); // add this engineer to the array of engineers in the employees object
        nextEmployee(); // ask user if they want to add another employee
    });
}

const makeIntern = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the intern:'
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
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school); // create new intern object
            employees.interns.push(intern); // add intern to the array of interns in the employees object
            nextEmployee(); // ask user if they want to add another employee
        });
}

const nextEmployee = () => {
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
            if (answers.anotherEmployee == "Engineer") { // run prompts for the engineer object
                makeEngineer();
            } else if (answers.anotherEmployee == "Intern") { // run prompts for the intern object
                makeIntern();
            } else if (answers.anotherEmployee == "Exit") {  // generate the page and exit the CLI          
               pagecontent.generatePage();
            };
        });
};