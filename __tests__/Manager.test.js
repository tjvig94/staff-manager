const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test("Sets employee info and uses functions from parent class", () => {
    const name = "Tim";
    const id = 1234;
    const email = "tjvig94@gmail.com";
    const officeNumber = 303;
    const manager = new Manager("Tim", 1234, "tjvig94@gmail.com", 303);
    expect(manager.getName()).toEqual(name);
});

test("Sets and receives office number", () => {
    const officeNumber = 303;
    const manager = new Manager("tim", 1234, "haha@gmail.com", 303);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
});