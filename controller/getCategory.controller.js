const Category = require("../model/category.model");

const getCategory = async (req, res) => {
  const all_cate = await Category.find();

  res.send({
    all_category: all_cate,
  });
};

module.exports = getCategory;
