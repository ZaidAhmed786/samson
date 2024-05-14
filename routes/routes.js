const express = require("express");
const router = express.Router();
const upload = require("../middleware/MulterMiddleware");
const CategoryController = require("../controllers/CategoryController");
const ProductController = require("../controllers/ProductController"); 
const OrderController = require("../controllers/OrderController");

// *********** Import Controller Functions *********** //
//!!  ********************* Routes ********************* --//
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("Papa Johns API");
});

//! *** Category Routes *** !//
router
  .route("/api/categories")
  .get(CategoryController.getCategories) /*** Get all Categories ***/
  .post(CategoryController.addCategory); /*** Add New Category ***/
router
  .route("/api/categories/:id")
  .get(CategoryController.getSingleCategory) /*** Get a Single Category ***/
  .patch(CategoryController.updateCategory) /*** Update Category ***/
  .delete(CategoryController.deleteCategory); /*** Remove Category ***/

//! *** Product Routes *** !//
router
  .route("/api/products")
  .get(ProductController.getProducts) /*** Get all Products ***/
  .post(upload.single("image"), ProductController.addProduct); /*** Add New Product ***/
router
  .route("/api/products/:id")
  .get(ProductController.getSingleProduct) /*** Get a Single Product ***/
  .patch(ProductController.updateProduct) /*** Update Product ***/
  .delete(ProductController.deleteProduct); /*** Remove Product ***/
router
  .route("/api/products/category/:categoryId")
  .get(ProductController.getProductsByCategory); /*** Get Products by Category ***/
 

//! *** Order Routes *** !//
router
  .route("/api/orders")
  .get(OrderController.getAddresses) /*** Get all Orders ***/
  .post(OrderController.addAddress); /*** Add New Order ***/
router
  .route("/api/orders/:id")
  .get(OrderController.getSingleAddress) /*** Get a Single Order ***/
  .patch(OrderController.updateAddress) /*** Update Order ***/
  .delete(OrderController.deleteAddress); /*** Remove Order ***/

router.all("*", (req, res) => {
  res.send("Route not found");
});

module.exports = router;
