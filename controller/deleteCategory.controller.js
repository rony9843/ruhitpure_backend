const Category = require("../model/category.model");

const deleteCategory = async (req, res) => {
  const id = req.body.id;

  await Category.deleteOne({ id });

  res.send({
    message: "delete successful",
  });
};

module.exports = deleteCategory;
