const Playlist = require("../models/playlist.model.js");
const { User } = require("../models/user.model.js");

const createPlaylist = async (req, res) => {
  try {
    const { userName, playlistName } = req.body;
    const user = User.findOne({ userName: userName });
    console.log("userID", user._id);
    const NewPlaylist = new Playlist({
      user: user._id,
      userplaylists: [{ playlistName: playlistName, playlistArray: [] }],
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

module.exports = { createPlaylist };
