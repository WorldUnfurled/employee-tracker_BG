const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@That1Guy7',
  database: 'company_db'
});

//
const conQuery = (query, rows) => {
    connection.query(query, rows, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
}

// ADD
const addDepartment = (id, name) => {
    let query = "INSERT INTO department(id, name) VALUES (?, ?)"; 
    let rows = [id, name];
    conQuery(query, rows);
}

const addEmployee = (id, first_name, last_name, role_id, manager_id) => {
    let query = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)";
    let rows = [ id, first_name, last_name, role_id, manager_id ];
    conQuery(query, rows);
}

const addRole = (id, title, salary, dept_id) => { // ADD ROLE
    let query = "INSERT INTO role(id, title, salary, department_id) VALUES (?, ?, ?, ?)";
    let rows = [ id, title, salary, dept_id ];
    conQuery(query, rows);
}

// VIEW
const viewAll = (table) => {
    let query = "SELECT * FROM " + table;
    conQuery(query);
}

const viewByDepartment = (table, dept_id) => { // VIEW ALL ROLES BY DEPARTMENT
    let query = "SELECT * FROM ? WHERE ?";
    let where = [ { dept_id: dept_id } ];
    conQuery(query, table, where);
}

// Update
const updateEmployee = (updateKey, oldValue, updateValue) => {
    let query = "UPDATE department SET ? WHERE ?";
    let where = [ { [updateKey]: oldValue }, { [updateKey]: updateValue } ];
    conQuery(query, where);
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ~ ${connection.threadId} ~`);
    viewAll("department");
    addEmployee(317, "Larry", "Schumer", 14, 145);
    viewAll("employee");
    connection.end();
});