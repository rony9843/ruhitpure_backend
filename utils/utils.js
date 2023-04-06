require("dotenv").config();

const utilsConnect = {
  PORT: process.env.PORT || 8800,
  MongoDb: `mongodb+srv://organicUser:${process.env.MONGODB_PASS}@cluster0.tibcl.mongodb.net/RohitpurFood`,
};

module.exports = utilsConnect;
