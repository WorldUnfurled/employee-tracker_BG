const inquirer = require('inquirer');
import * as q from './questions';
import { viewAll, addDepartment, addRole, addEmployee, updateEmployeeRole } from './queries'

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
                // viewAll(department)
                break;
            case 'All Roles':
                // viewAll(role)
                break;
            case 'All Employees':
                // viewAll(employee)
                break;
            default:
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
                break;
        };
    });
}

const addDepartmentPrompt = () => {
    inquirer
    .prompt(q.addDepartmentQuestions)
    .then(data => {
        addDepartment(data.name);
    });
}

const addRolePrompt = () => {
    inquirer
    .prompt(q.addRoleQuestions)
    .then(data => {
        addRole(data.title, data.salary, data.dept_id);
    });
}

const addEmployeePrompt = () => {
    inquirer
    .prompt(q.addEmployeeQuestions)
    .then(data => {
        addEmployeeRole(data.first_name, data.last_name, data.role_id, data.manager_id);
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

initPrompt();