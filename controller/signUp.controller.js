const User = require("../model/user.model");
const getUserByPhoneNumber = require("../services/getUserByPhoneNumber");

const signUpController = async (req, res) => {
  console.log(req.body);

  const {
    name,
    primaryPhoneNumber,
    password,
    SecondaryPhoneNumber,
    union,
    thana,
    district,
    userId,
    createdTime,
  } = req.body;

  const isExist = await getUserByPhoneNumber(primaryPhoneNumber);

  if (isExist) {
    return res.status(403).send({
      message: "already exist",
    });
  }

  const user = new User({
    name,
    primaryPhoneNumber,
    password,
    SecondaryPhoneNumber,
    union,
    thana,
    district,
    userId,
    createdTime,
  });

  user.save();

  console.log(
    "new user create -> ",
    name,
    primaryPhoneNumber,
    password,
    SecondaryPhoneNumber,
    union,
    thana,
    district,
    userId,
    createdTime
  );

  res.status(200).send({
    message: "Successful create a new user",
  });
};

module.exports = signUpController;
