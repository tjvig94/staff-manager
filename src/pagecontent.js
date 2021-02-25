const fs = require("fs");

// return HTML for a manager card
exports.managerCard = (manager) => {
    return `<div class="card mx-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h5>Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Employee ID: </strong>${manager.id}</li>
      <li class="list-group-item"><strong>Email: </strong>${manager.email}</li>
      <li class="list-group-item"><strong>Office Number: </strong>${manager.officeNumber}</li>
    </ul>
</div>`;
}; 

//return HTML for an engineer card
exports.engineerCard = (engineer) => {
    return `<div class="card mx-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h5>Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Employee ID: </strong>${engineer.id}</li>
      <li class="list-group-item"><strong>Email: </strong>${engineer.email}</li>
      <li class="list-group-item"><strong>Github: </strong><a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
    </ul>
</div>`;
}; 

// return HTML for an intern card
exports.internCard = (intern) => {
    return `<div class="card mx-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h5>Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Employee ID:</strong> ${intern.id}</li>
      <li class="list-group-item"><strong>Email:</strong> ${intern.email}</li>
      <li class="list-group-item"><strong>School:</strong> ${intern.school}</li>
    </ul>
</div>`;
}; 

// generate all cards for each manager in the array
exports.createManagerGroup = () => {
    let managerGroup = "";
    employees.managers.forEach(manager => {
        managerGroup += managerCard(manager);
    });
    return managerGroup;
}

// generate all cards for each engineer in the array
exports.createEngineerGroup = () => {
    let engineerGroup = "";
    employees.engineers.forEach(engineer => {
        engineerGroup += engineerCard(engineer);
    });
    return engineerGroup;
}

// generate all cards for each intern in the array
exports.createInternGroup = () => {
    let internGroup = "";
    employees.interns.forEach(intern => {
        internGroup += internCard(intern);
    });
    return internGroup;
}

exports.generatePage = () => { 
    // HTML for our page, which will contain all generated cards of our team
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
        <div class="container-fluid pt-5 pb-5 mb-5">
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

    fs.writeFile('index.html', pageContent, err => { // Create a file titled 'index.html' that contains the generated HTML, and returns an error or success
        err ? console.log(err) : console.log("Success!");
    });
}