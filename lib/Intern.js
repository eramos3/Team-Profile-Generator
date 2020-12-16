const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, id, email, role, githubUser) {
        super(name, id, email, role);
        this.githubUser = githubUser;
    }
    
    getGithub() {
        return this.githubUser;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Intern;