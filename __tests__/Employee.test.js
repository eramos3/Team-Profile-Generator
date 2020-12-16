const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 1, "Dave@gmail.com","Employee");
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('Dave@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Dave', 1, "Dave@gmail.com","Employee");
    expect(employee.getName()).toBe('Dave');
});

test('gets employee id', () => {
    const employee = new Employee('Dave', 1, "Dave@gmail.com","Employee");
    expect(employee.getId()).toBe(1);
});

test('gets employee email', () => {
    const employee = new Employee('Dave', 1, "Dave@gmail.com","Employee");
    expect(employee.getEmail()).toBe("Dave@gmail.com");
});

test('gets employee', () => {
    const employee = new Employee('Dave', 1, "Dave@gmail.com","employee");
    expect(employee.getRole()).toBe("employee");
});