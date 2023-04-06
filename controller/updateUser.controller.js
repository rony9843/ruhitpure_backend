const User = require("../model/user.model");

const updateUserController = async (req, res) => {
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
  } = req.body;

  await User.findOneAndUpdate(
    {
      name: "userName",
    },
    {
      thana: "new sonakanda",
    }
  );

  res.send({
    message: "update",
  });
};

module.exports = updateUserController;
