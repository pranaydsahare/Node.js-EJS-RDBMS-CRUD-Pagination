// Import the Express module
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();

const db = require('./config/database.js')



// Create an instance of Express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


//template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
//route declare
const category = require("./routes/categoryMaster.js")
const product = require("./routes/productMaster.js");

//route use
app.use(category)
app.use(product)



// Start the server and listen on port 3000
 
app.listen(process.env.PORT || 3000, (error) => {
    if(error) throw error;
    console.log(`Server is running on port ${process.env.PORT}`)
})

