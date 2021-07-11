const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} = require("../controllers/category");

router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .put(updateCategory)
  .delete(deleteCategory)
  .get(getCategory);

module.exports = router;
