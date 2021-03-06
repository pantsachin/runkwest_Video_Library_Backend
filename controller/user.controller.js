const { User } = require("../models/user.model.js");
const { Video } = require("../models/video.model.js");

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const NewUser = new User(req.body);
    const saveNewUser = await NewUser.save();
    res.status(200).json({ success: true, saveNewUser });
  } catch (error) {
    console.log("error occured in saving the new user details");
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "couldn't save the user details" });
  }
};

const addVideoToWatchLaterForAUser = async (req, res) => {
  try {
    const { userName, videoId } = req.body;
    const videoToBeAdded = await Video.findOne({ videoId: videoId });

    const userToBeUpdated = await User.findOne({ userName: userName });

    userToBeUpdated.userWatchLaterList.push(videoToBeAdded._id);

    const updatedUser = await userToBeUpdated.save();

    const userToBePopulatedAndSent = await User.findOne({
      userName: userName,
    }).populate("userWatchLaterList");

    res.status(200).json({
      success: true,
      message: "Successfully added video to watch later list",
      updatedUser,
      userToBePopulatedAndSent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error, adding to the watch later list",
    });
  }
};

const removeVideoFromWatchLaterForAUser = async (req, res) => {
  try {
    const { userName, videoId } = req.body;
    const videoToBeDeleted = await Video.findOne({ videoId: videoId });
    const userToBeUpdated = await User.findOne({ userName: userName });

    userToBeUpdated.userWatchLaterList.remove(videoToBeDeleted._id);

    console.log("userToBeUpdated", userToBeUpdated);

    const updatedUser = await userToBeUpdated.save();

    console.log("updatedUser", updatedUser);

    res.status(200).json({
      success: true,
      message: "video removed from the playlist",
      updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "couldn't remove from the watch later list!",
    });
  }
};

module.exports = {
  createUser,
  addVideoToWatchLaterForAUser,
  removeVideoFromWatchLaterForAUser,
};
