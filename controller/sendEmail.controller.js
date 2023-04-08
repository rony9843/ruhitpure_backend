const emailjs = require("@emailjs/nodejs");

const sendEmailController = (req, res) => {
  console.log("emaillll");

  var templateParams = {
    name: "James",
    notes: "Check this out!",
  };

  emailjs
    .send("service_ys8t0kp", "template_4pdgnty", templateParams, {
      publicKey: "hsQBHjyK42Gb2Xgzg",
      privateKey: "yBbvBwnDkcT9a3FAfJWjK", // optional, highly recommended for security reasons
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};

module.exports = sendEmailController;
