const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
router
  .get("/:id", productController.getProduct)
  .get("/", productController.getProducts)
  .post("/", productController.addProducts)
  .patch("/:id",productController.updateProduct)
  .delete("/:id",productController.deleteProduct)

exports.ProductRouter = router;
