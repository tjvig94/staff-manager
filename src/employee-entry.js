const fs = require('fs');
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
               generatePage();
            };
        });
};

function generatePage(...employees) {
    fs.writeFile('index.html', homePage, (err) => {
        console.log(err);
    });
    employees.forEach(employee => {
        let employeeCard =
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${employee.name}</h5>
  <p class="card-text">${employee.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${employee.id}</li>
  <li class="list-group-item">Email:${employee.email}</li>
  <li class="list-group-item">ITEM</li>
</ul>
</div>`;
    document.getElementsByClassName("employee-field").append(employeeCard);
    });
}

const homePage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Team Viewer</title>
</head>
<body>

    <header>
        <div class="container-fluid">
            <div class="row">
                <h1 class="text-center">Team Viewer</h1>
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="row employee-field">



            </div>
        </div>
    </main>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

  <script src="../src/employee-entry.js"></script>
</body>
</html>`;

init();

