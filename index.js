const express = require("express");
const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8800;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.post("/signUp", (req, res) => {
//   console.log(req);
//   res.send("successful");
// });

app.post("/signUp", (req, res) => {
  console.log(req.body);
  res.send("success");
});
app.get("/signUp", (req, res) => {
  res.json({
    message: "this is res message success : >",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
