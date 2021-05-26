const mongoose = require("mongoose");
const { Schema } = mongoose;

const VideoSchema = new Schema({
  videoId: String,
  category: String,
  avatar: String,
  title: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  channel: String,
  postedOn: String,
  subscriber: String,
  duration: String,
  description: String,
});

const Video = mongoose.model("Video", VideoSchema);
