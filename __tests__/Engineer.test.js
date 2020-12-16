const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer ('jack',2,"jack@gmail.com","engineer","jackgit1");
    expect(engineer.name).toBe('jack');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('jack@gmail.com');
    expect(engineer.githubUser).toBe('jackgit1');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('jack',2,"jack@gmail.com","engineer","jackgit1");

    expect(engineer.getGithub()).toBe("jackgit1");
});

test("gets employee role", () => {
    const engineer = new Engineer('jack',2,"jack@gmail.com","engineer","jackgit1");

    expect(engineer.getRole()).toBe("engineer");
});