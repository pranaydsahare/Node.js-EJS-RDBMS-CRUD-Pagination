
# Node.js ,EJS, RDBMS CRUD Pagination


This project is a web application built using Node.js, EJS template engine, and a relational database management system (MySQL). It features CRUD (Create, Read, Update, Delete) operations for managing categories and products. Additionally, the product list includes server-side pagination functionality to efficiently handle large datasets

## Deployment

To deploy this project run

**1] install this dependencies**

a) express :Express is a minimal and flexible web application framework for Node.js. It provides a robust set of features to develop web and mobile applications. With Express, developers can easily create server-side applications, APIs, and web services using JavaScript.

b) mysql2 :
mysql2 is a Node.js driver for MySQL databases. It provides an interface for interacting with MySQL databases from Node.js applications. mysql2 is a fast, efficient, and feature-rich alternative to the original mysql package

c) body-parser : body-parser is a middleware for Express.js, a web application framework for Node.js. It is responsible for parsing incoming request bodies in various formats such as JSON, URL-encoded, and multipart/form-data

d) dotenv : dotenv is a Node.js module that allows you to load environment variables from a .env file into your Node.js application's process.env object. This module is particularly useful for managing configuration variables and sensitive information (like API keys, database URLs, etc.) in your Node.js applications.

**2] Set up your database:**

Create a database in your RDBMS (e.g., MySQL).
Update the database configurations in config/db.config.js file.

Set up your .env file as you require:

=>PORT = 5000

=>HOST = localhost

=>USER = root

=>PASSWORD = *******

=>DB_PORT = 3306

=>DATABASE = services




**3] Run the application:**
   npm start

4] Open your web browser and visit http://localhost:5000/allproducts to access the application

**5]Usage:**

Navigate to the Category and Product pages to perform CRUD operations.
The product list page displays products with pagination. You can navigate through pages to view more products.



## 🛠 Skills
Javascript,Node.ja,Express.js,MySQL


## Tech Stack

**Client:** EJS (Embedded JavaScript),Bootstrap (for minimal styling)



**Server:** Node, Express

**language:**  Javascript

**Database:** MySQL (or any other RDBMS)




## Authors

- [@pranaydsahare](https://github.com/pranaydsahare)

