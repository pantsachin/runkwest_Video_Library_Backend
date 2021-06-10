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

    userPlaylistToBeUpdated.userplaylists.push({
      playlistName: playlistName,
      playlistArray: [videoToBeAdded._id],
    });

    const saveUpdatedPlaylist = await userPlaylistToBeUpdated.save();

    //population
    const userPlaylistToBePopulatedAndSent = await Playlist.findOne({
      userId: user._id,
    }).populate("userplaylists.playlistArray");

    res.status(200).json({
      success: true,
      saveUpdatedPlaylist,
      userPlaylistToBePopulatedAndSent,
      message: "playlist was successfully added!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: fail,
      message: "failed to add playlist and video, please try again!",
    });
  }
};

const addToExistingUserPlaylist = async (req, res) => {
  try {
    const { userName, playlistName, videoId } = req.body;
    const user = await User.findOne({ userName: userName });
    const userPlaylist = await Playlist.findOne({
      userId: user._id,
    });

    const video = await Video.findOne({ videoId: videoId });

    userPlaylist.userplaylists.map((playlist) =>
      playlist.playlistName == playlistName
        ? playlist.playlistArray.push(video._id)
        : playlist
    );

    const savedUser = await userPlaylist.save();

    const userPlaylistToBePopulatedAndSent = await Playlist.findOne({
      userId: user._id,
    }).populate("userplaylists.playlistArray");

    console.log(
      "userPlaylistToBePopulatedAndSent",
      userPlaylistToBePopulatedAndSent
    );

    res.status(200).json({
      success: true,
      savedUser,
      userPlaylistToBePopulatedAndSent,
      message: "The video has been added to the playlist",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message:
        "Coudln't add the playlist to the playlistArray, please try agian!",
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

module.exports = {
  createUserPlaylist,
  addToUserPlaylist,
  addToExistingUserPlaylist,
};
