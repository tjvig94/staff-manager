const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee')

test("Sets employee info and uses functions from parent class", () => {
    const name = "Tim";
    const id = 1234;
    const email = "tjvig94@gmail.com";
    const engineer = new Engineer("Tim", 1234, "tjvig94@gmail.com");
    expect(engineer.getName()).toEqual(name);
});

test("Sets and receives github username", () => {
    const github = "tjvig94";
    const engineer = new Engineer("tim", 1234, "haha@gmail.com", "tjvig94");
    expect(engineer.getGithub()).toEqual(github);
});

test("Inherits info from parent class 'Employee'", () => {
    const name = 'Tim';
    const id = 1234;
    const email = "tjvig94@gmail.com"
    const github = "tjvig94";
    const employee = new Employee(name, id, email);
    const engineer = new Engineer(employee, "tjvig94");
    expect(engineer.getName()).toEqual(name);
    expect(engineer.getGithub()).toEqual(github);
});