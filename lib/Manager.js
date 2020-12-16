const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
    }
    getRole() {
        return this.role;
    }

    getNum() {
        return this.officeNum;
    }
};

module.exports = Manager;
