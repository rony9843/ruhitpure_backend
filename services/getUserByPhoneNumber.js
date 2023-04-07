const User = require("../model/user.model");

const getUserByPhoneNumber = async (props) => {
  const isUser = await User.findOne({ primaryPhoneNumber: props });

  return isUser ? true : false;
};

module.exports = getUserByPhoneNumber;
