const express = require("express");
const router = express.Router();

const {
  createUserPlaylist,
  addToUserPlaylist,
} = require("../controller/playlist.controller.js");

router.route("/").post(createUserPlaylist);
router.route("/add").post(addToUserPlaylist);

module.exports = router;
