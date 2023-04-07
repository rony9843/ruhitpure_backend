const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const signUpController = require("./controller/signUp.controller");
const utilsConnect = require("./utils/utils");
const connectDb = require("./db/db");
const getUserController = require("./controller/getUser.controller");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.post("/signUp", signUpController);

app.get("/logIn", getUserController);

// ? mongodb connect
connectDb(utilsConnect.MongoDb)
  .then(() => {
    console.log("database connected");
    // app lister
    app.listen(utilsConnect.PORT, () => {
      console.log(`server is running at ${utilsConnect.PORT}`);
    });
  })
  .catch((e) => console.log(e));
