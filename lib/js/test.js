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
const addDepartment = (name) => {
    let query = "INSERT INTO department(name) VALUES (?, ?)"; 
    let rows = [ name ];
    conQuery(query, rows);
}

const addEmployee = (first_name, last_name, role_manager_id) => {
    let query = "INSERT INTO employee (first_name, last_name, role_manager_id) VALUES (?, ?, ?, ?, ?)";
    let rows = [ first_name, last_name, role_manager_id ];
    conQuery(query, rows);
}

const addRole = (title, salary, dept_id) => { // ADD ROLE
    let query = "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?, ?)";
    let rows = [ title, salary, dept_id ];
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
export const updateEmployee = (updateKey, oldValue, updateValue) => {
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