# Node.js, EJS, RDBMS CRUD Pagination

This project is a web application built using Node.js, EJS template engine, and a relational database management system (RDBMS). It features CRUD (Create, Read, Update, Delete) operations for managing categories and products. Additionally, the product list includes server-side pagination functionality to efficiently handle large datasets.

## Deployment

### 1. Install Dependencies

a) express 

b) mysql2 :

c) body-parser 

d) dotenv 


### 2. Set Up Your Database

Create a database in your RDBMS (e.g., MySQL). 

### 3. Set Up Your .env File

Update the database configurations in the `config/db.config.js` file.

PORT=5000
HOST=localhost
USER=root
PASSWORD=*******
DB_PORT=3306
DATABASE=services


### 4. Run the Application:
	with **npm start** commant on terminal


### 5. Access the Application

Open your web browser and visit: [http://localhost:5000/allproducts](http://localhost:5000/allproducts)

## Usage

Navigate to the Category and Product pages to perform CRUD operations. The product list page displays products with pagination. You can navigate through pages to view more products.

## Database Tables Description

### Category Table
- **Table Name**: Category
- **Description**: This table stores information about different categories of products.
- **Columns**:
  - `CategoryId`: An integer representing the unique identifier for each category. It serves as the primary key for this table.
  - `CategoryName`: A string (varchar) representing the name of the category. It has a maximum length of 50 characters.

### Product Table
- **Table Name**: Product
- **Description**: This table contains details of various products along with their respective categories.
- **Columns**:
  - `ProductId`: An integer representing the unique identifier for each product. It serves as the primary key for this table.
  - `ProductName`: A string (varchar) representing the name of the product. It has a maximum length of 50 characters.
  - `fk_CategoryId`: An integer representing the foreign key that references the `CategoryId` in the Category table. This establishes a relationship between products and their respective categories. Additionally, it is configured with cascading actions:
    - `ON UPDATE CASCADE`: If the referenced `CategoryId` is updated, the corresponding `fk_CategoryId` in the Product table will also be updated.
    - `ON DELETE CASCADE`: If a category is deleted from the Category table, all related products in the Product table will also be deleted.

## 🛠 Skills

- **JavaScript**: <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width="20"/>
- **Node.js**: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node.js" width="20"/>
- **Express.js**: <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" width="20"/>
- **MySQL**: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" alt="MySQL" width="20"/>

## Tech Stack

### Client-Side
- **EJS (Embedded JavaScript)**: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="Bootstrap" width="20"/>

### Server-Side
- **Node.js**: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node.js" width="20"/>
- **Express.js**: <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" width="20"/>

### Language
- **JavaScript**: <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width="20"/>

### Database
- **MySQL (or any other RDBMS)**: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" alt="MySQL" width="20"/>

## Authors

- [@pranaydsahare](https://github.com/pranaydsahare)








