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
                connection.end();
                break;
            case 'All Roles':
                query.viewAll("role");
                connection.end();
                break;
            case 'All Employees':
                query.viewAll("employee");
                connection.end();
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
        connection.end();
    });
}

const addRolePrompt = () => {
    inquirer
    .prompt(q.addRoleQuestions)
    .then(data => {
        query.addRole(data.title, data.salary, data.dept_id);
        connection.end();
    });
}

const addEmployeePrompt = () => {
    inquirer
    .prompt(q.addEmployeeQuestions)
    .then(data => {
        query.addEmployee(data.first_name, data.last_name, data.role_id, data.manager_id);
        connection.end();
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
        connection.end();
    })
}

module.exports = { initPrompt, viewPrompt };