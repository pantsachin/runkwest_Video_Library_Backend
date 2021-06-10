const express = require("express");
const router = express.Router();

const {
  userDataOnLogin,
} = require("../controller/loginUserDataFetch.controller.js");

router.route("/").get(userDataOnLogin);
// check if you can send request body with a get request

module.exports = router;
