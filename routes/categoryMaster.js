const express = require("express");
const connection = require("../config/database");
const { render } = require("ejs");
const router = express.Router();
const app = express();

//get Method
router.get("/allcategory", (req, res) => {
  str = `SELECT * from category`;
  connection.query(str, (error, result) => {
    if (error) throw error;
    else {
                res.status(200).render("categoryPage", { data: result });
                //console.log(product)
            }
        })
});

//delet method
router.get("/delete",(req,res)=>{
    connection.query("DELETE from category where CategoryId=?",[req.query.id],(error,rows)=>{
        if(error)throw error;
        else{
            connection.query("SELECT * from category",(error,product)=>{
                if(error)throw error;
                else{
                    res.status(200).render("categoryPage", { data: product });
                }
            })

        }
    })
})

//insert method
router.post("/create",(req,res)=>{
  var categoryData = [req.body.CategoryName];
  connection.query("INSERT into category(CategoryName) values(?)",[categoryData],(error)=>{
    if(error) throw error;
    else{
      connection.query("SELECT * from category",(error,product)=>{
        if(error)throw error;
        else{
            res.status(200).render("categoryPage", { data: product });
            //console.log(product)
        }
    })
    }
  })

})

//Update Method for specific id
router.get("/update/:id",(req,res)=>{

  var id = req.params.id;
  connection.query(`SELECT * from category where CategoryId=${id}`,(error,result)=>{
    if(error)throw error;
    else{
        res.status(200).render("categoryupdate", { data: result });
        console.log(result)
    }
})
})

//updated method : to update the data
router.post("/updateCategoryName/:id",(req,res)=>{

  var id = req.params.id;
  var NewCategoryName = req.body.CategoryName;
  connection.query(`Update category SET CategoryName="${NewCategoryName}" where CategoryId=${id} `,(error)=>{
    if(error)throw error;
    else{
      str = `SELECT * from category`;
      connection.query(str, (error, product) => {
        if (error) throw error;
        else {
                    res.status(200).render("categoryPage", { data: product });
                    //console.log(product)
                }
            })
          }
})
})

module.exports = router;

