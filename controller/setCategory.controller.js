const Category = require("../model/category.model");

const setCategoryController = async (req, res) => {
  const { name } = req.body;

  const newCategory = new Category({
    CategoryName: name,
  });

  const saveCate = await newCategory.save();

  res.send({
    message: "Category upload successful!!!",
    saveCate,
  });
};

module.exports = setCategoryController;
