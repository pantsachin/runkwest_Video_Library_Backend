const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  userPassword: String,
  userWatchLaterList: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const User = mongoose.model("User", UserSchema);
