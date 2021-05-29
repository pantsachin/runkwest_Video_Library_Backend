const express = require("express");
const router = express.Router();

const { createPlaylist } = require("../controller/playlist.controller.js");

router.route("/").post(createPlaylist);

module.exports = router;
