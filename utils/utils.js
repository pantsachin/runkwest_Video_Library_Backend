const videosDataBase = require("../database/database.connect.js");
const { Video } = require("../models/video.model.js");

function populateVideosDataBase() {
  try {
    videosDataBase.forEach(async (video) => {
      const NewVideo = new Video(video);
      const savedVideo = await NewVideo.save();
      console.log(savedVideo);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { populateVideosDataBase };
