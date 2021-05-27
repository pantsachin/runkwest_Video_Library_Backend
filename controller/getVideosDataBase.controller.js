const { Video } = require("../models/video.model.js");

const getVideosDataBase = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't fetch data, please try again",
    });
  }
};

module.exports = { getVideosDataBase };
