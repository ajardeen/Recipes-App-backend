const e = require("express");
const Recipe = require("../Models/RecipesModel");

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, category } = req.body;
    const recipe = new Recipe({
      name,
      ingredients,
      instructions,
      category,
    });
    const savedRecipe = await recipe.save();
    res.status(201).json({message:"Recipe created successfully",savedRecipe});
  } catch (error) {
    res.status(500).json({ error: "Failed to create recipe" });
  }
};

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({message:"Recipes fetched successfully",recipes});
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};
// Get a single recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }else{
      res.status(200).json({message:"Recipes fetched successfully",recipe});
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
};
// Update a recipe by ID
const updateRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, category } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, ingredients, instructions, category }, // Update fields
      { new: true, runValidators: true } // Return updated document and validate input
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe updated successfully", updatedRecipe });
  } catch (error) {
    res.status(500).json({ error: "Failed to update recipe", details: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }else{
      res.json({message: "Recipe deleted successfully"});
    }
  }catch (error) {
    res.status(500).json({ error: "Failed to delete recipe" });
  }
}

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};