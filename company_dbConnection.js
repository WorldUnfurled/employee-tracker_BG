const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '@That1Guy7',
  database: 'company_db',
});

const initQuestion = [{
    name: 'action',
    message: 'What would you like to do?',
    type: 'list',
    choices: ['View', 'Add', 'Update']
}]

const init = () => {
    inquirer
        .prompt(initQuestion);
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ~ ${connection.threadId} ~`);
    init();
});