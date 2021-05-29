const express = require("express");
const router = express.Router();

const { createUserPlaylist } = require("../controller/playlist.controller.js");

router.route("/").post(createUserPlaylist);

module.exports = router;
