const User = require("../model/user.model");

const getUserController = async (req, res) => {
  // const user = await User.findOne({ userId: req.query.userId });

  const { phoneNumber, password } = req.body;

  // check primary phone number
  let user = await User.findOne({
    primaryPhoneNumber: phoneNumber,
    password: password,
  });

  console.log("user -> ", user, new Date());

  // ? if primary phone number not found
  if (!user) {
    user = await User.findOne({
      SecondaryPhoneNumber: phoneNumber,
      password: password,
    });
  }

  // ? if user not found
  if (!user) {
    return res.status(404).send({
      statusCode: 404,
      user: user,
    });
  }

  // ? user found
  if (user.password === password) {
    res
      .send({
        statusCode: 200,
        user: user,
      })
      .status(200);
  } else {
    res
      .send({
        statusCode: 200,
        user: user,
      })
      .status(403);
  }

  /**
   * ? 404 - not found
   * ? 200 - found
   * ? 403 - password not match
   */
};

module.exports = getUserController;
