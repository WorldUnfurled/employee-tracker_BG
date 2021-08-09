const inquirer = require('inquirer');

const actionQuestions = [
    {
        type: 'list',
        name: 'actionChoice',
        message: 'What would you like to do?',
        choices: ['View', 'Add', 'Update', 'Delete']
    }
]

const viewQuestions = [
    {
        type: 'list',
        name: 'viewChoice',
        message: 'What would you like to view?',
        choices: ['All Departments', 'All Roles', 'All Employees']
    }
]

const addQuestions = [
    {
        type: 'list',
        name: 'addChoice',
        message: 'What would you like to add?',
        choices: ['Department', 'Role', 'Employee']
    }
]

const updateQuestions = [
    {
        type: 'list',
        name: 'updateChoice',
        message: 'What would you like to update?',
        choices: ['Department', 'Role', 'Employee']
    }
]

const deleteQuestions = [
    {
        type: 'list',
        name: 'deleteChoice',
        message: 'What would you like to delete?',
        choices: ['Department', 'Role', 'Employee']
    }
]

const initPrompt = () => {
    inquirer
    .prompt(actionQuestions)
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
    .prompt(viewQuestions)
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
    .prompt(addQuestions)
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

const updatePrompt = () => {
    inquirer
    .prompt(updateQuestions)
    .then(data => {
        switch(data.updateChoice) {
            case 'Department':
                updateDepartmentPrompt();
                break;
            case 'Role':
                updateRolePrompt();
                break;
            case 'Employee':
                updateEmployeePrompt();
                break;
            default:
                break;
        };
    });
} 

const deletePrompt = () => {
    inquirer
    .prompt(deleteQuestions)
    .then(data => {
        switch(data.updateChoice) {
            case 'Department':
                deleteDepartmentPrompt();
                break;
            case 'Role':
                deleteRolePrompt();
                break;
            case 'Employee':
                deleteEmployeePrompt();
                break;
            default:
                break;
        };
    });
} 