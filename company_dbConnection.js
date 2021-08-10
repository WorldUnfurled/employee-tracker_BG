const mysql = require('mysql');
require('dotenv').config('./env');

// Create connection
module.exports = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});