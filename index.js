const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// const inquirer = require('inquirer');
const prompts = require('./src/prompts');

let employees = {
    managers: [],
    engineers: [],
    interns: []
};

// // Prompts
// function init() {
//     inquirer
//         .prompt([
//             {
//                 name: 'name',
//                 type: 'input',
//                 message: 'Enter the name of the manager for this project:'
//             },
//             {
//                 name: 'id',
//                 type: 'input',
//                 message: 'Enter the id number of this employee:'
//             },
//             {
//                 name: 'email',
//                 type: 'input',
//                 message: 'Enter the email address of this employee:'
//             },
//             {
//                 name: 'officeNumber',
//                 type: 'input',
//                 message: 'Enter the office number for the manager:'            
//             },
//         ])
//         .then(answers => {            
//             let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); // Create the manager object
//             employees.managers.push(manager); //add manager to the array of managers in the employees object
//             nextEmployee(); // prompt user if they want to add another employee
//         });
// };

// function makeEngineer() {
//     inquirer
//         .prompt([
//             {
//                 name: 'name',
//                 type: 'input',
//                 message: 'Enter the name of the engineer:'
//             },
//             {
//                 name: 'id',
//                 type: 'input',
//                 message: 'Enter the id number of this employee:'
//             },
//             {
//                 name: 'email',
//                 type: 'input',
//                 message: 'Enter the email address of this employee:'
//             },
//             {
//                 name: 'github',
//                 type: 'input',
//                 message: 'Enter the github username of this employee:'            
//             }
//         ])
//         .then(answers => {
//             let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); //create new engineer object
//             employees.engineers.push(engineer); // add this engineer to the array of engineers in the employees object
//             nextEmployee(); // ask user if they want to add another employee
//         });
// };

// function makeIntern() {
//     inquirer
//         .prompt([
//             {
//                 name: 'name',
//                 type: 'input',
//                 message: 'Enter the name of the intern:'
//             },
//             {
//                 name: 'id',
//                 type: 'input',
//                 message: 'Enter the id number of this employee:'
//             },
//             {
//                 name: 'email',
//                 type: 'input',
//                 message: 'Enter the email address of this employee:'
//             },
//             {
//                 name: 'school',
//                 type: 'input',
//                 message: 'Enter the school of this employee:'            
//             }
//         ])
//         .then(answers => {
//             let intern = new Intern(answers.name, answers.id, answers.email, answers.school); // create new intern object
//             employees.interns.push(intern); // add intern to the array of interns in the employees object
//             nextEmployee(); // ask user if they want to add another employee
//         });
// };

// function nextEmployee() {
//     inquirer
//         .prompt([
//             {
//                 name: 'anotherEmployee',
//                 type: 'list',
//                 message: 'Enter the type of employee you would like to enter, or exit:',
//                 choices: ['Engineer', 'Intern', 'Exit'] 
//              }
//         ])
//         .then(answers => {
//             if (answers.anotherEmployee == "Engineer") { // run prompts for the engineer object
//                 makeEngineer();
//             } else if (answers.anotherEmployee == "Intern") { // run prompts for the intern object
//                 makeIntern();
//             } else if (answers.anotherEmployee == "Exit") {  // generate the page and exit the CLI          
//                generatePage();
//             };
//         });
// };

// // return HTML for a manager card
// function managerCard(manager) {
//     return `<div class="card mx-3" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${manager.name}</h5>
//       <h5>Manager</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item"><strong>Employee ID: </strong>${manager.id}</li>
//       <li class="list-group-item"><strong>Email: </strong>${manager.email}</li>
//       <li class="list-group-item"><strong>Office Number: </strong>${manager.officeNumber}</li>
//     </ul>
// </div>`;
// }; 

// //return HTML for an engineer card
// function engineerCard(engineer) {
//     return `<div class="card mx-3" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${engineer.name}</h5>
//       <h5>Engineer</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item"><strong>Employee ID: </strong>${engineer.id}</li>
//       <li class="list-group-item"><strong>Email: </strong>${engineer.email}</li>
//       <li class="list-group-item"><strong>Github: </strong><a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
//     </ul>
// </div>`;
// }; 

// // return HTML for an intern card
// function internCard(intern) {
//     return `<div class="card mx-3" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${intern.name}</h5>
//       <h5>Intern</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item"><strong>Employee ID:</strong> ${intern.id}</li>
//       <li class="list-group-item"><strong>Email:</strong> ${intern.email}</li>
//       <li class="list-group-item"><strong>School:</strong> ${intern.school}</li>
//     </ul>
// </div>`;
// }; 

// // generate all cards for each manager in the array
// function createManagerGroup() {
//     let managerGroup = "";
//     employees.managers.forEach(manager => {
//         managerGroup += managerCard(manager);
//     });
//     return managerGroup;
// }

// // generate all cards for each engineer in the array
// function createEngineerGroup() {
//     let engineerGroup = "";
//     employees.engineers.forEach(engineer => {
//         engineerGroup += engineerCard(engineer);
//     });
//     return engineerGroup;
// }

// // generate all cards for each intern in the array
// function createInternGroup() {
//     let internGroup = "";
//     employees.interns.forEach(intern => {
//         internGroup += internCard(intern);
//     });
//     return internGroup;
// }

// function generatePage() { 
//     // HTML for our page, which will contain all generated cards of our team
//     let pageContent = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <!-- Bootstrap -->
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
//     <title>Team Viewer</title>
// </head>
// <body>

//     <header>
//         <div class="container-fluid pt-5 pb-5 mb-5">
//             <div class="row">
//                 <h1 class="text-center">Team Viewer</h1>
//             </div>
//         </div>
//     </header>

//     <main>
//         <div class="container">
//             <div class="row employee-field">

//             ${createManagerGroup()}
//             ${createEngineerGroup()}
//             ${createInternGroup()}

//             </div>
//         </div>
//     </main>
    
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

//   <script src="../src/employee-entry.js"></script>
// </body>
// </html>`;

//     fs.writeFile('index.html', pageContent, err => { // Create a file titled 'index.html' that contains the generated HTML, and returns an error or success
//         err ? console.log(err) : console.log("Success!");
//     });
// }
 
prompts.init(); // initialize our application 
