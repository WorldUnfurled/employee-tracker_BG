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
        name: 'viewChoice',
        message: 'What would you like to add?',
        choices: ['Department', 'Role', 'Employee']
    }
]

const updateQuestions = [
    {
        type: 'list',
        name: 'viewChoice',
        message: 'What would you like to update?',
        choices: ['Department', 'Role', 'Employee']
    }
]

const deleteQuestions = [
    {
        type: 'list',
        name: 'viewChoice',
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
        switch(data.actionChoice) {
            case 'All Employees':
                // 
                break;
            case 'Add':
                // addEmployees
                break;
            case 'Update':
                // Update
                break;
            case 'Delete':
                deletePrompt();
                break;
            default:
                break;
        };
    });
}
