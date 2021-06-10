const { Video } = require("../models/video.model.js");
const { Playlist } = require("../models/playlist.model.js");
const { User } = require("../models/user.model.js");

const userDataOnLogin = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName: userName }).populate(
      "userWatchLaterList"
    );
    const playlist = await Playlist.findOne({ userId: user._id }).populate(
      "userplaylists.playlistArray"
    );

    res.status(200).json({ success: true, user, playlist });
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json({ success: false, message: "Couldn't fetch user data" });
  }
};
