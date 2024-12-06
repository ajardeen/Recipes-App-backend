const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../Controllers/RecipeController");
const router = express.Router();

router.post("/create", createRecipe);
router.get("/getall", getAllRecipes);
router.get("/get/:id", getRecipeById);
router.put("/update/:id", updateRecipe);
router.delete("/delete/:id", deleteRecipe);
module.exports = router;
