const express = require("express");
const router = express.Router();

const {
  createUserPlaylist,
  addToUserPlaylist,
  addToExistingUserPlaylist,
} = require("../controller/playlist.controller.js");

router.route("/").post(createUserPlaylist);
router.route("/add").post(addToUserPlaylist);
router.route("/addToExisting").post(addToExistingUserPlaylist);

module.exports = router;
