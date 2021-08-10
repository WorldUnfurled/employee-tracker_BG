const actionQuestions = [
    {
        type: 'list',
        name: 'actionChoice',
        message: 'What would you like to do?',
        choices: ['View', 'Add', 'Update', 'Delete', 'Quit']
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
        name: 'name',
        message: 'What is the department\'s name?'
    }
]

const addRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the role\'s title?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?'
    },
    {
        type: 'input',
        name: 'dept_id',
        message: 'What is the id of the department this role is under?'
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employee\'s first name?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employee\'s last name?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the ID of the role the employee operates under?'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the ID of the manager the employee operates under?'
    }
]

const updateQuestions = [
    {
        type: 'list',
        name: 'role_id',
        message: 'What would you like to update?',
        choices: ['Employee Role', 'Quit']
    },
    {
        type: 'input',
        name: 'newValue',
        message: 'Type a new existing role ID for the employee you want to update.'
    },
    {
        type: 'input',
        name: 'oldValue',
        message: 'Type an existing employee ID for the employee you want to update.'
    }
]

module.exports = { actionQuestions, viewQuestions, addQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateQuestions };