const express = require("express");
const router = express.Router();
const {
  getVideosDataBase,
} = require("../controller/getVideosDataBase.controller.js");

router.route("/").get(getVideosDataBase);

module.exports = { router };
