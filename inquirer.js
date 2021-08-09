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
        choices: ['All Departments', 'All Roles', 'All Employees', 'Quit']
    }
]

const addQuestions = [
    {
        type: 'list',
        name: 'addChoice',
        message: 'What would you like to add?',
        choices: ['Department', 'Role', 'Employee', 'Quit']
    }
]

const updateQuestions = [
    {
        type: 'list',
        name: 'updateChoice',
        message: 'What would you like to update?',
        choices: ['Employee Role', 'Quit']
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
            case 'Employee Role':
                updateEmployeeRolePrompt();
                break;
            default:
                // Quit
                break;
        };
    });
} 