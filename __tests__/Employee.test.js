const { TestScheduler } = require('jest');
const Employee = require('../lib/employee');

test('Can set and retrieve employee name', () => {
    const name = "Tim";
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name);
});

test('Can set and retrieve employee email', () => {
    const email = "tjvig94@gmail.com";
    const employee = new Employee("Tim Vigneau", 1234, email);
    expect(employee.getEmail()).toEqual("tjvig94@gmail.com");
});

test('Can set and retrieve employee id', () => {
    const id = 1234;
    const employee = new Employee("Tim", id, "lol@gmail.com");
    expect(employee.getId()).toEqual(1234);
});