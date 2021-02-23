const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test("Sets employee info and uses functions from parent class", () => {
    const name = "Tim";
    const id = 1234;
    const email = "tjvig94@gmail.com";
    const school = "UNH";
    const intern = new Intern("Tim", 1234, "tjvig94@gmail.com", "UNH");
    expect(intern.getName()).toEqual(name);
});

test("Sets and receives school name", () => {
    const school = "UNH";
    const intern = new Intern("Tim", 1234, "haha@gmail.com", "UNH");
    expect(intern.getSchool()).toEqual(school);
});