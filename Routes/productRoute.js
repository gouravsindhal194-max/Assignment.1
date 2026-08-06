const express = require("express");
const router = express.Router();
const validation = require("../Middlewares/checkValidation");
const checkToken = require("../Middlewares/checkToken");
const {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../Controllers/product");
const {
  productSchema,
  updateProductSchema,
} = require("../Middlewares/validationSchema");

router.post("/", checkToken, validation(productSchema), createProduct);
router.get("/", checkToken, getAllProduct);
router.get("/:id", checkToken, getProductById);
router.put("/:id", checkToken, validation(updateProductSchema), updateProduct);
router.delete("/:id", checkToken, deleteProduct);

module.exports = router;