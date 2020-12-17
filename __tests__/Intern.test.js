const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern ('jake',3,"jake@gmail.com","intern","ucla");
    expect(intern.name).toBe('jake');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('jake@gmail.com');
    expect(intern.school).toBe('ucla');
});

test("gets intern's school", () => {
    const intern = new Intern('jake',3,"jake@gmail.com","intern","ucla");

    expect(intern.getSchool()).toBe("ucla");
});

test("gets employee role", () => {
    const intern = new Intern('jake',3,"jake@gmail.com","intern","ucla");

    expect(intern.getRole()).toBe("intern");
});