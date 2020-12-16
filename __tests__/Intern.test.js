const Intern = require('../lib/Intern.js');

test('creates an Engineer object', () => {
    const intern = new Intern ('jack',3,"jack@gmail.com","engineer","jackgit1");
    expect(intern.name).toBe('jack');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('jack@gmail.com');
    expect(intern.githubUser).toBe('jackgit1');
});

test("gets intern's github username", () => {
    const intern = new Intern('jack',2,"jack@gmail.com","intern","jackgit1");

    expect(intern.getGithub()).toBe("jackgit1");
});

test("gets employee role", () => {
    const intern = new Intern('jack',2,"jack@gmail.com","intern","jackgit1");

    expect(intern.getRole()).toBe("engineer");
});