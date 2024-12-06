const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true },
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Beverage"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
