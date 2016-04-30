'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.MYSQL_PASSWORD,
  database : 'banking'
});

connection.connect();

module.exports = connection;
