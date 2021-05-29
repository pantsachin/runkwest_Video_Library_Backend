const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaylistSchema = new Schema({
  user: { type: Schema.Type.ObjectId, ref: "User" },
  userplaylists: [
    {
      playlistName: { type: String, unique: true },
      playlistArray: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    },
  ],
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;
