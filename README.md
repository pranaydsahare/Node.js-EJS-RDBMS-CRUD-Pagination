
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


## Tech Stack

**Client:** EJS (Embedded JavaScript),Bootstrap (for minimal styling)



**Server:** Node, Express

**language:**  Javascript

**Database:** MySQL (or any other RDBMS)




## Authors

- [@pranaydsahare](https://github.com/pranaydsahare)

