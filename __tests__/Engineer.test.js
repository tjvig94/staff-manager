const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test("Sets employee info and uses functions from parent class", () => {
    const name = "Tim";
    const id = 1234;
    const email = "tjvig94@gmail.com";
    const github = "tjvig94";
    const engineer = new Engineer("Tim", 1234, "tjvig94@gmail.com", "tjvig94");
    expect(engineer.getName()).toEqual(name);
});

test("Sets and receives github username", () => {
    const github = "tjvig94";
    const engineer = new Engineer("tim", 1234, "haha@gmail.com", "tjvig94");
    expect(engineer.getGithub()).toEqual(github);
});