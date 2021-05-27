const express = require("express");
const router = express.Router();

const { createUser } = require("../controller/user.controller.js");

router.route("/login").post(createUser);

module.exports = router;
