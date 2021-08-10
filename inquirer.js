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

const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'addDepartmentName',
        message: 'What is the department\'s name?'
    }
]

const addRoleQuestions = [
    {
        type: 'input',
        name: 'addRoleTitle',
        message: 'What is the role\'s title?'
    },
    {
        type: 'input',
        name: 'addRoleTitle',
        message: 'What is the salary for this role?'
    },
    {
        type: 'list',
        name: 'addRoleDeptId',
        message: 'What is the id of the department this role is under?'
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'addEmployeeFirst',
        message: 'What is the employee\'s first name?'
    },
    {
        type: 'input',
        name: 'addEmployeeLast',
        message: 'What is the employee\'s last name?'
    },
    {
        type: 'list',
        name: 'addEmployeeRoleId',
        message: 'What is the ID of the role the employee operates under?'
    },
    {
        type: 'list',
        name: 'addEmployeeManagerId',
        message: 'What is the ID of the manager the employee operates under?'
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

const addDepartmentPrompt = () => {
    inquirer
    .prompt(addDepartmentQuestions)
    .then(data => {});
}

const addRolePrompt = () => {
    inquirer
    .prompt(addRoleQuestions)
    .then(data => {});
}

const addEmployeePrompt = () => {
    inquirer
    .prompt(addEmployeeQuestions)
    .then(data => {});
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

const updateEmployeeRolePrompt = () => {
    inquirer
    .prompt(updateEmployeeRoleQuestions)
    .then(data => {})
}