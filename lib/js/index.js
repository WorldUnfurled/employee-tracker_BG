const inquirer = require('inquirer');
const q = require('./questions');
const query = require('./queries');

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
            case 'Delete':
                deletePrompt();
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
    });
}

const addRolePrompt = () => {
    inquirer
    .prompt(q.addRoleQuestions)
    .then(data => {
        query.addRole(data.title, data.salary, data.dept_id);
    });
}

const addEmployeePrompt = () => {
    inquirer
    .prompt(q.addEmployeeQuestions)
    .then(data => {
        query.addEmployeeRole(data.first_name, data.last_name, data.role_id, data.manager_id);
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
                // Quit
                break;
        };
    });
}

const updateEmployeeRole = () => {
    inquirer
    .prompt(q.updateRoleQuestions)
    .then(data => {
        query.updateEmployeeRole(data.role_id, data.oldValue, data.newValue);
    })
}

module.exports = { initPrompt, viewPrompt };