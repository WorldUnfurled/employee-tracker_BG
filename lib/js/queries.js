// Connection query function
const conQuery = (query, rows) => {
    connection.query(query, rows, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
}

// View
const viewAll = (table) => { // View all from specified table
    let query = "SELECT * FROM " + table;
    conQuery(query);
}

// Add
const addDepartment = (name) => { // Department
    let query = "INSERT INTO department(name) VALUES (?, ?)"; 
    let rows = [ name ];
    conQuery(query, rows);
}

const addEmployee = (first_name, last_name, role_manager_id) => { // Role
    let query = "INSERT INTO employee (first_name, last_name, role_manager_id) VALUES (?, ?, ?, ?, ?)";
    let rows = [ first_name, last_name, role_manager_id ];
    conQuery(query, rows);
}

const addRole = (title, salary, dept_id) => { // Employee
    let query = "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?, ?)";
    let rows = [ title, salary, dept_id ];
    conQuery(query, rows);
}

// Update
const updateEmployeeRole = (updateKey, oldValue, newValue) => { // Employee role
    let query = "UPDATE employee SET ? WHERE ?";
    let where = [ { [updateKey]: oldValue }, { [updateKey]: newValue } ];
    conQuery(query, where);
}

module.exports = { viewAll, addDepartment, addEmployee, addRole, updateEmployeeRole };