const connection = require('../../company_dbConnection');
// Connection query function

// View
const viewAll = (table) => { // View all from specified table
    let query = "SELECT * FROM " + table;
    connection.query(query);
}

// Add
const addDepartment = (name) => { // Department
    let query = "INSERT INTO department(name) VALUES (?, ?)"; 
    let rows = [ name ];
    connection.query(query, rows);
}

const addEmployee = (first_name, last_name, role_manager_id) => { // Role
    let query = "INSERT INTO employee (first_name, last_name, role_manager_id) VALUES (?, ?, ?, ?, ?)";
    let rows = [ first_name, last_name, role_manager_id ];
    connection.query(query, rows);
}

const addRole = (title, salary, dept_id) => { // Employee
    let query = "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?, ?)";
    let rows = [ title, salary, dept_id ];
    connection.query(query, rows);
}

// Update
const updateEmployeeRole = (updateKey, oldValue, newValue) => { // Employee role
    let query = "UPDATE employee SET ? WHERE ?";
    let where = [ { [updateKey]: oldValue }, { [updateKey]: newValue } ];
    connection.query(query, where);
}

module.exports = { viewAll, addDepartment, addEmployee, addRole, updateEmployeeRole };