export const actionQuestions = [
    {
        type: 'list',
        name: 'actionChoice',
        message: 'What would you like to do?',
        choices: ['View', 'Add', 'Update', 'Delete']
    }
]

export const viewQuestions = [
    {
        type: 'list',
        name: 'viewChoice',
        message: 'What would you like to view?',
        choices: ['All Departments', 'All Roles', 'All Employees', 'Quit']
    }
]

export const addQuestions = [
    {
        type: 'list',
        name: 'addChoice',
        message: 'What would you like to add?',
        choices: ['Department', 'Role', 'Employee', 'Quit']
    }
]

export const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the department\'s name?'
    }
]

export const addRoleQuestions = [
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
        type: 'list',
        name: 'dept_id',
        message: 'What is the id of the department this role is under?'
    }
]

export const addEmployeeQuestions = [
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
        type: 'list',
        name: 'role_id',
        message: 'What is the ID of the role the employee operates under?'
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'What is the ID of the manager the employee operates under?'
    }
]

export const updateQuestions = [
    {
        type: 'list',
        name: 'updateChoice',
        message: 'What would you like to update?',
        choices: ['Employee Role', 'Quit']
    }
]