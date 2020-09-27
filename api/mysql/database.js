const mysql = require("mysql");
const config = require('./config');

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
});

// open the connection
connection.connect(error => {
  if (error) {
    throw error;
  }

  console.log('Successfully connected to the database');
});

module.exports = connection;