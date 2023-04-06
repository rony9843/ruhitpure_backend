const User = require("../model/user.model");

const getUserController = async (req, res) => {
  const user = await User.findOne({ userId: req.query.userId });

  console.log(req.query.userId);
  console.log("user -> ", user, new Date());

  // ? if user not found
  if (!user) {
    return res.status(404).send({
      statusCode: 404,
      user: user,
    });
  }

  // ? user found
  res
    .send({
      statusCode: user ? 200 : 404,
      user: user,
    })
    .status(200);
};

module.exports = getUserController;
