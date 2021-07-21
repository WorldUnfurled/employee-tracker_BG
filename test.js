const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@That1Guy7',
  database: 'company_db'
});

const id = "id";
const name = "name";

const updateDepartment = () => {
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

const addDepartment = () => {
    connection.query(`INSERT INTO department(\`${id}\`, \`${name}\`) VALUES (121, 'Purchasing')`, (err, res) => {
        if (err) throw err;
    });
} 

const viewDepartment = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.log(res);
    });
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ~ ${connection.threadId} ~`);
    // addDepartment(); // Works
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