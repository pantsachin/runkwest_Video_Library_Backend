const Playlist = require("../models/playlist.model.js");
const { User } = require("../models/user.model.js");
const { Video } = require("../models/video.model.js");

const createUserPlaylist = async (req, res) => {
  try {
    const { userName, playlistName, videoId } = req.body;
    const user = await User.findOne({ userName: userName });
    const videoToBeAdded = await Video.findOne({ videoId: videoId });

    const NewPlaylist = new Playlist({
      userId: user._id,
      userplaylists: userplaylists.push({
        playlistName: playlistName,
        playlistArray: playlistArray.push(videoToBeAdded._id),
      }),
    });

    const saveUserPlaylist = await NewPlaylist.save();

    res.status(200).json({
      success: true,
      message: "New Playlist has been successfully created",
      saveUserPlaylist,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Couldn't Create a new playlist, please try again",
    });
  }
};

module.exports = { createUserPlaylist };
