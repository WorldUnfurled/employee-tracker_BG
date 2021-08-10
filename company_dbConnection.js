const mysql = require('mysql');
const prompt = require('./lib/js/index');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@That1Guy7',
  database: 'company_db'
});

connection.connect((err) => {
    if (err) throw err;
    prompt.initPrompt();
});