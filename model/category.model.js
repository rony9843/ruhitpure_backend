const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  CategoryName: String,
});

const Category = model("Category", categorySchema);

module.exports = Category;
