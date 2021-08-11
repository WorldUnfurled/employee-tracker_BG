const cTable = require('console.table');
const connection = require('../../company_dbConnection');
// Connection query function

// View
const viewAll = (table) => { // View all from specified table
    let query = "SELECT * FROM " + table;
    connection.query(query, (err, res) => {
        console.table(res);
    });
}

// Add
const addDepartment = (name) => { // Department
    let query = `INSERT INTO department(name) VALUES ` + "(" + '"' + name + '"' + ")";
    connection.query(query);
}

const addEmployee = (first_name, last_name, role_id, manager_id) => { // Role
    let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ` +  "(" + '"' + first_name + '"' + "," + '"' + last_name + '"' + "," + '"' + role_id + '"' + "," + '"' + manager_id + '"' + ")";
    connection.query(query);
}

const addRole = (title, salary, dept_id) => { // Employee
    let query = `INSERT INTO role (title, salary, department_id) VALUES ` + "(" + '"' + title + '"' + "," + '"' + salary + '"' + "," + '"' + dept_id + '"' + ")";
    connection.query(query);
}

// Update
const updateEmployeeRole = (roleID, employeeID) => { // Employee role
    let query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    let where = [roleID , employeeID];
    connection.query(query, where, (err, res) => {
        console.table(res);
    });
}

module.exports = { viewAll, addDepartment, addEmployee, addRole, updateEmployeeRole };