const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  primaryPhoneNumber: String,
  SecondaryPhoneNumber: String,
  password: {
    type: String,
    // maxLength: [6, "password is too long"],
  },
  secondaryPhoneNumber: String,
  union: String,
  thana: String,
  district: String,
  userId: String,
  createdTime: String,
});

const User = model("User", userSchema);

module.exports = User;
