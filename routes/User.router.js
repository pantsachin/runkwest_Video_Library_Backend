const express = require("express");
const router = express.Router();

const {
  createUser,
  addVideoToWatchLaterForAUser,
  removeVideoFromWatchLaterForAUser,
} = require("../controller/user.controller.js");

router.route("/").post(createUser);

router.route("/add").post(addVideoToWatchLaterForAUser);
router.route("/remove").post(removeVideoFromWatchLaterForAUser);

module.exports = router;
