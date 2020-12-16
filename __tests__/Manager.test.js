const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dave',1,"Dave@gmail.com","manager","555-555-5555");
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('Dave@gmail.com');
    expect(manager.officeNum).toBe('555-555-5555');
});

test("gets employees role", () => {
    const manager = new Manager('Dave');

    expect(manager.getRole()).toBe(manager.role);
});

test("gets manager's number", () => {
    const manager = new Manager('Dave');

    expect(manager.getNum()).toBe(manager.officeNum);
});