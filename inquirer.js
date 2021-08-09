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
        console.log(data.actionChoice);
    });
}
