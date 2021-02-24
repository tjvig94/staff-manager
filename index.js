const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

let employees = {
    managers: [],
    engineers: [],
    interns: []
};

// Prompts

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
            employees.managers.push(manager);
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
            employees.engineers.push(engineer);
            nextEmployee();
        });
};

function makeIntern() {
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
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.interns.push(intern);
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

function managerCard(manager) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h5>Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${manager.id}</li>
      <li class="list-group-item">Email: ${manager.email}</li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>`;
}; 

function engineerCard(engineer) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h5>Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${engineer.id}</li>
      <li class="list-group-item">Email: ${engineer.email}</li>
      <li class="list-group-item">Github: ${engineer.github}</li>
    </ul>
</div>`;
}; 

function internCard(intern) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h5>Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${intern.id}</li>
      <li class="list-group-item">Email: ${intern.email}</li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>`;
}; 

function createManagerGroup() {
    let managerGroup = "";
    employees.managers.forEach(manager => {
        managerGroup += managerCard(manager);
    });
    return managerGroup;
}

function createEngineerGroup() {
    let engineerGroup = "";
    employees.engineers.forEach(engineer => {
        engineerGroup += engineerCard(engineer);
    });
    return engineerGroup;
}

function createInternGroup() {
    let internGroup = "";
    employees.interns.forEach(intern => {
        internGroup += internCard(intern);
    });
    return internGroup;
}

function generatePage() { 
let pageContent = `<!DOCTYPE html>
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

            ${createManagerGroup()}
            ${createEngineerGroup()}
            ${createInternGroup()}

            </div>
        </div>
    </main>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

  <script src="../src/employee-entry.js"></script>
</body>
</html>`;

    fs.writeFile('index.html', pageContent, err => {
        err ? console.log(err) : console.log("Success!");
    });
}

init();
