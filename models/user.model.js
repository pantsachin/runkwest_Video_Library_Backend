const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String,
  userPassword: String,
  userWatchLaterList: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
