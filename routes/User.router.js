const express = require("express");
const router = express.Router();

const {
  createUser,
  addVideoToWatchLaterForAUser,
  removeVideoFromWatchLaterForAUser,
} = require("../controller/user.controller.js");

router.route("/login").post(createUser);

router.route("/watch-later").post(addVideoToWatchLaterForAUser);
router.route("/remove-watch-later").post(removeVideoFromWatchLaterForAUser);

module.exports = router;
