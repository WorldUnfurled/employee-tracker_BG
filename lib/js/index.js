const inquirer = require('inquirer');
const q = require('./questions');
const connection = require('../../company_dbConnection');
const query = require('./queries')

connection.connect((err) => {
    err ? err : initPrompt();
});

const initPrompt = () => {
    inquirer
    .prompt(q.actionQuestions)
    .then(data => {
        switch(data.actionChoice) {
            case 'View':
                viewPrompt();
                break;
            case 'Add':
                addPrompt();
                break;
            case 'Update':
                updatePrompt();
                break;
            default:
                connection.end();
                break;
        };
    });
}

const viewPrompt = () => {
    inquirer
    .prompt(q.viewQuestions)
    .then(data => {
        switch(data.viewChoice) {
            case 'All Departments':
                query.viewAll("department");
                break;
            case 'All Roles':
                query.viewAll("role");
                break;
            case 'All Employees':
                query.viewAll("employee");
                break;
            default:
                connection.end();
                break;
        };
    });
}

const addPrompt = () => {
    inquirer
    .prompt(q.addQuestions)
    .then(data => {
        switch(data.addChoice) {
            case 'Department':
                addDepartmentPrompt();
                break;
            case 'Role':
                addRolePrompt();
                break;
            case 'Employee':
                addEmployeePrompt();
                break;
            default:
                connection.end();
                break;
        };
    });
}

const addDepartmentPrompt = () => {
    inquirer
    .prompt(q.addDepartmentQuestions)
    .then(data => {
        query.addDepartment(data.name);
        query.viewAll("department");
        initPrompt();
    });
}

const addRolePrompt = () => {
    inquirer
    .prompt(q.addRoleQuestions)
    .then(data => {
        query.addRole(data.title, data.salary, data.dept_id);
        query.viewAll("role");
        initPrompt();
    });
}

const addEmployeePrompt = () => {
    inquirer
    .prompt(q.addEmployeeQuestions)
    .then(data => {
        query.addEmployee(data.first_name, data.last_name, data.role_id, data.manager_id);
        query.viewAll("employee");
        initPrompt();
    });
}

const updatePrompt = () => {
    inquirer
    .prompt(q.updateQuestions)
    .then(data => {
        switch(data.updateChoice) {
            case 'Employee Role':
                updateEmployeeRolePrompt();
                break;
            default:
                connection.end();
                break;
        };
    });
}

const updateEmployeeRolePrompt = () => {
    inquirer
    .prompt(q.updateRoleQuestions)
    .then(data => {
        query.updateEmployeeRole(data.role_id, data.oldValue, data.newValue);
        query.viewAll("employee");
        initPrompt();
    })
}

module.exports = { initPrompt, viewPrompt };