const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@That1Guy7',
  database: 'company_db'
});

// const initQuestion = [{
//     name: 'init',
//     message: 'What would you like to work with?',
//     type: 'list',
//     choices: ['Department', 'Role', 'Employees']
// }];

// const specifyDepartment = [{
//     name: 'init',
//     message: 'Which department would you like to work with specifically?',
//     type: 'list',
//     // choices: ['INSERT DEPARTMENT CHOICES']
// }]

// const actionQuestion = [{
//     name: 'view',
//     message: 'What would you like to do?',
//     type: 'list',
//     choices: ['View', 'Add', 'Update']
// }];

// const updateSelection = [{
//     name: 'action',
//     message: 'What role would you like to update?',
//     type: 'list',
//     choices: ['role1', 'role2', 'role3']
// }];

// const init = () => {
//     inquirer.prompt(initQuestion);
// }

// const view = () => {
//     inquirer.prompt(viewSelection);
// }

// const add = () => {
//     inquirer.prompt(addSelection);
// }

// const update = () => {
//     inquirer.prompt(updateSelection);
// }

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ~ ${connection.threadId} ~`);
    init();
});