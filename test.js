const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@That1Guy7',
  database: 'company_db'
});

const conQuery = (query) => {
    connection.query(query, (err, res) => {
        if (err) throw err;
    });
}
const conQueryRows = (query, rows) => {
    connection.query(query, rows, (err, res) => {
        if (err) throw err;
    });
}

const conQueryWhere = (query, where) => {
    connection.query(query, where, (err, res) => {
        if (err) throw err;
    });
}

// ADD
// 1. DEPARTMENT
const addDepartment = (id, name) => {
    let query = "INSERT INTO department(id, name) VALUES (?, ?)"; 
    let rows = [id, name];
    conQueryRows(query, rows);
}

const viewAll = (table) => {
    let query = "SELECT * FROM ?";
    conQuery(query, table);
}

// 2. ROLE
const addRole = (id, title, salary, dept_id) => { // ADD ROLE
    let query = "INSERT INTO role(id, title, salary, department_id) VALUES (?, ?, ?, ?)";
    let rows = [ id, title, salary, dept_id ];
    conQueryRows(query, rows);
}
const viewRolesByDepartment = (dept_id) => { // VIEW ALL ROLES BY DEPARTMENT
    let query = "SELECT * FROM role WHERE ?";
    let where = [ { dept_id: 111 } ];
    conQueryWhere(query, where);
}

// 3. EMPLOYEE
const addEmployee = (id, first_name, last_name, role_id, manager_id) => {
    let query = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)";
    let rows = [ id, first_name, last_name, role_id, manager_id ];
    conQueryRows(query, rows);
}

const updateEmployee = (updateKey, oldValue, updateValue) => {
    let query = "UPDATE department SET ? WHERE ?";
    let where = [ { [updateKey]: oldValue }, { [updateKey]: updateValue } ];
    conQueryWhere(query, where);
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ~ ${connection.threadId} ~`);
    addDepartment("14", "Sanitization");
    // addDepartment(); // Works
    // viewDepartment(); // Works
    // viewRole();
    // viewEmployee();
    // addRole();
    // addEmployee();
    // updateDepartment(); // Works
    // updateRole();
    // updateEmployee();
    connection.end();
});