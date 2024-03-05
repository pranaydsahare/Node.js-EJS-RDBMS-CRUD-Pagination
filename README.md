
# Node.js ,EJS, RDBMS CRUD Pagination


This project is a web application built using Node.js, EJS template engine, and a relational database management system (MySQL). It features CRUD (Create, Read, Update, Delete) operations for managing categories and products. Additionally, the product list includes server-side pagination functionality to efficiently handle large datasets

## Deployment

To deploy this project run

**1] install this dependencies**

a) express 

b) mysql2 :

c) body-parser 

d) dotenv 

**2] Set up your database:**

Create a database in your RDBMS (e.g., MySQL).

# Database Tables Description

## Category Table
- **Table Name**: Category
- **Description**: This table stores information about different categories of products.
- **Columns**:
  - `CategoryId`: An integer representing the unique identifier for each category. It serves as the primary key for this table.
  - `CategoryName`: A string (varchar) representing the name of the category. It has a maximum length of 50 characters.

## Product Table
- **Table Name**: Product
- **Description**: This table contains details of various products along with their respective categories.
- **Columns**:
  - `ProductId`: An integer representing the unique identifier for each product. It serves as the primary key for this table.
  - `ProductName`: A string (varchar) representing the name of the product. It has a maximum length of 50 characters.
  - `fk_CategoryId`: An integer representing the foreign key that references the `CategoryId` in the Category table. This establishes a relationship between products and their respective categories.
  - **Foreign Key Constraint**: `fk_CategoryId` references the `CategoryId` column in the Category table, ensuring referential integrity. Additionally, it is configured with cascading actions:
    - `ON UPDATE CASCADE`: If the referenced CategoryId is updated, the corresponding fk_CategoryId in the Product table will also be updated.
    - `ON DELETE CASCADE`: If a category is deleted from the Category table, all related products in the Product table will also be deleted.


Update the database configurations in config/db.config.js file.

**3]Set up your .env file as you require:**

=>PORT = 5000

=>HOST = localhost

=>USER = root

=>PASSWORD = *******

=>DB_PORT = 3306

=>DATABASE = services




**4] Run the application:**
   npm start

**5] Open your web browser and visit :** http://localhost:5000/allproducts to access the application

**6]Usage:**

Navigate to the Category and Product pages to perform CRUD operations.
The product list page displays products with pagination. You can navigate through pages to view more products.



## 🛠 Skills
Javascript,Node.ja,Express.js,MySQL
# 🛠 Skills

- **JavaScript**: 
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width="20"/>

- **Node.js**: 
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node.js" width="20"/>

- **Express.js**: 
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" width="20"/>

- **MySQL**: 
  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" alt="MySQL" width="20"/>



## Tech Stack



## Client-Side
- **EJS (Embedded JavaScript)**: Utilized for server-side templating, allowing dynamic content generation based on data received from the server.
- **Bootstrap**: Employed for minimal styling to enhance the visual appeal and user experience of the application.
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="Bootstrap" width="20"/>

## Server-Side
- **Node.js**: Used as the server-side JavaScript runtime environment to execute server-side logic.
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node.js" width="20"/> 
- **Express**: Employed as the web application framework for Node.js, facilitating the handling of HTTP requests, routing, and middleware integration.
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" width="20"/>

## Language
- **JavaScript**: The primary programming language utilized for both client-side and server-side development, ensuring consistency and ease of development across the entire application.
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width="20"/>

## Database
- **MySQL (or any other RDBMS)**: Selected as the relational database management system to store and manage application data in a structured format, providing robustness, scalability, and data integrity.



## Authors

- [@pranaydsahare](https://github.com/pranaydsahare)

