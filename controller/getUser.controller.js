const User = require("../model/user.model");

const getUserController = async (req, res) => {
  // const user = await User.findOne({ userId: req.query.userId });

  const { phoneNumber, password } = req.query;

  console.log(phoneNumber, password);

  // check primary phone number
  let user = await User.findOne({
    primaryPhoneNumber: phoneNumber,
  });

  console.log("user -> ", user, new Date());

  // ? if primary phone number not found
  if (!user) {
    user = await User.findOne({
      SecondaryPhoneNumber: phoneNumber,
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
    console.log("inside match");
    res.status(200).send({
      statusCode: 200,
      user: user,
    });
  } else {
    console.log("inside not match");
    res.status(403).send({
      statusCode: 403,
      user: null,
    });
  }

  /**
   * ? 404 - not found
   * ? 200 - found
   * ? 403 - password not match
   */
};

module.exports = getUserController;
