const mongoose = require("mongoose");
const { Schema } = mongoose;
const { User } = require("./user.model.js");
const { Video } = require("./video.model.js");

const PlaylistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", unique: true },
  userplaylists: [
    {
      playlistName: { type: String, unique: true },
      playlistArray: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    },
  ],
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;
