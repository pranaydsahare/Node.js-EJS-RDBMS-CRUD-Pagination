const mysql = require('mysql2');

const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createPool({ 
    host: process.env.HOST, 
    port: process.env.DB_PORT, 
    database: process.env.DATABASE, 
    user: process.env.USER, 
    password: process.env.PASSWORD ,
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
