const express = require("express");
const router = express.Router();

const {
  createUser,
  addVideoToWatchLaterForAUser,
  removeVideoFromWatchLaterForAUser,
} = require("../controller/user.controller.js");

router.route("/login").post(createUser);

router.route("/watch-later").post(addVideoToWatchLaterForAUser);
router.route("/watch-later-remove").post(removeVideoFromWatchLaterForAUser);

module.exports = router;
