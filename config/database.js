const mysql = require('mysql2');

const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createPool({ 
    host: process.env.HOST, 
    port: process.env.DB_PORT, 
    // default port for mysql is 3306 
    database: process.env.DATABASE, 
    // database from which we want to connect out node application 
    user: process.env.USER, 
    // username of the mysql connection 
    password: process.env.PASSWORD ,
    // password of the mysql connection 
    multipleStatements: true

});

connection.getConnection(function (err) {
    if(err){
        console.log(err);
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });

 module.exports = connection;