const Playlist = require("../models/playlist.model.js");
const { User } = require("../models/user.model.js");
const { Video } = require("../models/video.model.js");

//on add to playlist this will be created for a user
const createUserPlaylist = async (req, res) => {
  try {
    const { userName, videoId } = req.body;
    const user = await User.findOne({ userName: userName });
    const videoToBeAdded = await Video.findOne({ videoId: videoId });

    const NewPlaylist = new Playlist({
      userId: user._id,
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

const addToUserPlaylist = async (req, res) => {
  try {
    const { userName, videoId, playlistName } = req.body;
    const user = await User.findOne({ userName: userName });
    const userPlaylistToBeUpdated = await Playlist.findOne({
      userId: user._id,
    });
    const videoToBeAdded = await Video.findOne({ videoId: videoId });

    const uodatedPlaylist = userPlaylistToBeUpdated.userplaylists.push({
      playlistName: playlistName,
      playlistArray: [videoToBeAdded._id],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: fail,
      message: "failed to add playlist and video, please try again!",
    });
  }
};

// const addToExistingUserPlaylist = async (req, res) => {
//   try {
//     const { userName, playlistName, videoId } = req.body;
//     const user = await User.findOne({ userName: userName });
//     const userPlaylistToBeUpdated = await Playlist.findOne({ userId: user._id });
//     const video = await Video.findOne({videoId: videoId});

//     const userPlaylistToBeUpdated.userplaylists.findOne({})

//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports = { createUserPlaylist, addToUserPlaylist };
