const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlTemplate = require('./src/htmlTemplate');


const employees = [];
const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the name of the employee? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        number: 'input',
        name: 'id',
        message: 'What is this employees id number? (Required)',
        validate: nameId => {
            if (nameId) {
                return true;
            } else {
                console.log('Please enter id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the your email for others to contact you (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email address!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employees role?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Enter the the office number (Required)',
        when: (data) => data.role === "Manager",
        validate: officeNum => {
            if (officeNum) {
                return true;
            } else {
                console.log('Please enter office number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter the your github username (Required)',
        when: (data) => data.role === "Engineer",
        validate: githubUser => {
            if (githubUser) {
                return true;
            } else {
                console.log('Please enter github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school name (Required)',
        when: (data) => data.role === "Intern",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log('Please enter school name!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }
];

const employeeObj = data => {
    switch (data.role) {
        case "Manager":
            return new Manager(data.name, data.id, data.email, data.role, data.officeNum);
        case "Engineer":
            return new Engineer(data.name, data.id, data.email, data.role, data.githubUser);
        default:
            return new Intern(data.name, data.id, data.email, data.role, data.school);
    }
};

const addEmployee = () => {
    console.log(`
      =================
      Add a New Employee
      =================
    `);
    return inquirer.prompt(questions)
        .then(employeeData => {
            employees.push(employeeObj(employeeData));
            if (employeeData.confirmAddEmployee) {
                return addEmployee(employeeData);
            } else {
                return employeeData;
            }
        })
};

addEmployee()
    .then(employeeData =>{
        return htmlTemplate(employeeData);
    })
    .catch(err => {
        console.log(err);
    });


    
    