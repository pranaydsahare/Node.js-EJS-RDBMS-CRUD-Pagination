const express = require("express");
const connection = require("../config/database");
const { render } = require("ejs");
const router = express.Router();




//const PAGE_SIZE = 10; // Number of records per page

router.get("/allproducts", (req, res) => {
  const PAGE_SIZE = 10;
  const page = req.query.page || 1; // Default page is 1
  const offset = (page - 1) * PAGE_SIZE;

  const query = `SELECT ProductId, ProductName, CategoryId, CategoryName 
                 FROM product p 
                 JOIN category c on CategoryId = fk_CategoryId
                 LIMIT ?, ?`;

  connection.query(query, [offset, PAGE_SIZE], (error, results) => {
    if (error) {
      throw error;
    } else {
      //  total count of products
      connection.query("SELECT COUNT(*) AS total FROM product", (err, totalCount) => {
        if (err) {
          throw err;
        }

        const totalProducts = totalCount[0].total;
        const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

        res.render("productPage", {
          data: results,
          currentPage: parseInt(page),
          totalPages: totalPages,
          PAGE_SIZE: PAGE_SIZE 

        });
      });
    }
  });
});



//get Method: to render Product master(curd ,productupdate.ejs)
router.get("/productMaster", (req, res) => {
  str = `SELECT ProductId,ProductName,CategoryId,CategoryName FROM product p join category c on CategoryId= fk_CategoryId`;

  connection.query(str, (error, Productresult) => {
    if (error) throw error;
    else {
      const result1 = Productresult;

      connection.query("SELECT * from category", (error, result2) => {
        if (error) throw error;
        else {
          res.render("productUpdate", { data: result1, result2 });
        }
      });
    }
  });
});

//---------------------------------

//delet method
router.get("/delete/:id", (req, res) => {
  var id = req.params.id;

  connection.query(
    "DELETE from product where ProductId=?",
    [id],
    (error, rows) => {
      if (error) throw error;
      else {
        res.redirect("/productMaster");
      }
    }
  );
});

//insert method
router.post("/createProduct", (req, res) => {
  

  const productname = req.body.name;
  const productCategory = req.body.category;
  connection.query(
    "INSERT into product(ProductName,fk_CategoryId) values(?,?)",
    [productname, productCategory],
    (error) => {
      if (error) throw error;
      else {
        res.redirect("/productMaster");
      }
    }
  );
});

//Update Method for specific id
router.get("/pupdate/:id", (req, res) => {
  var id = req.params.id;
  connection.query(
    `SELECT ProductId,ProductName,CategoryId,CategoryName from product p right join category c on p.fk_CategoryId=c.CategoryId  and  ProductId=${id} order by ProductName desc`,
    (error, results) => {
      if (error) throw error;
      else {
        res.status(200).render("productEdit", { data: results });
      }
    }
  );
});

//updated method : to update the data
router.post("/updateProductName/:id", (req, res) => {
  var id = req.params.id;
  var NewProductName = req.body.ProductName;
  var NEWCategoryId=req.body.category;
  connection.query(
    `Update product SET ProductName="${NewProductName}",fk_CategoryId="${NEWCategoryId}"  where ProductId=${id} `,
    (error) => {
      if (error) throw error;
      else {
        res.redirect('/productMaster')
      }
    }
  );
});

module.exports = router;
