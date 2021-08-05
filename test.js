const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@That1Guy7',
  database: 'company_db'
});

// department vars
let department_id = `707`;
const department_name = `Merchandising`;

// role vars
const staff_id = 23;
const staff_title = "Staff Accountant";
const staff_salary = 43267.34;
const staff_dept_id = 111;

//employee vars
const employee_id = 31;
const employee_first = `Kelly`;
const employee_last = `Smartt`;
const employee_salary = 78921.50;
const employee_dept_id = 113;

// ADD
// 1. DEPARTMENT
const addDepartment = () => {
    const departmentQuery = `INSERT INTO department(\`id\`, \`name\`) VALUES (${department_id}, ${department_name})`
    connection.query(departmentQuery, (err, res) => {
        if (err) throw err;
    });
}

const viewDepartments = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.log(res);
    });
}

// 2. ROLE
const addRole = () => {
    const roleQuery = `INSERT INTO role(\`id\`, \`title\`, \`salary\`, \`department_id\`) VALUES (${staff_id}, ${staff_title}, ${staff_salary}, ${staff_dept_id})`
    connection.query(roleQuery, (err, res) => {
        if (err) throw err;
    });
}

const viewRoles = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        console.log(res);
    });
}

// 3. EMPLOYEE
const addEmployee = () => {
    // const roleQuery; 
    connection.query(`INSERT INTO employee(\`id\`, \`first_name\`, \`last_name\`, \`role_id\`, \`manager_id\`) VALUES (${employee_id}, ${employee_first}, \`${employee_last}\`, ${employee_salary}, ${employee_dept_id})`, (err, res) => {
        if (err) throw err;
    });
}

const viewRoles = () => {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.log(res);
    });
}

const updateEmployee = () => {
    connection.query('UPDATE department SET ? WHERE ?',
            [
              {
                id: 111
              },
              {
                id: 1
              },
            ], (err) => {
                if (err) throw err;
              }
    );
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ~ ${connection.threadId} ~`);
    addDepartment(); // Works
    viewDepartment(); // Works
    // viewRole();
    // viewEmployee();
    // addRole();
    // addEmployee();
    // updateDepartment(); // Works
    // updateRole();
    // updateEmployee();
    connection.end();
});