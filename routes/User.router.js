const express = require("express");
const router = express.Router();

const {
  createUser,
  addVideoToWatchLaterForAUser,
} = require("../controller/user.controller.js");

router.route("/login").post(createUser);

router.route("/watch-later").post(addVideoToWatchLaterForAUser);

module.exports = router;
