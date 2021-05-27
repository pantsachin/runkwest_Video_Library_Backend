const { User } = require("../models/user.model.js");

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const NewUser = new User(req.body);
    const saveNewUser = await NewUser.save();
    res.status(200).json({ success: true, saveNewUser });
  } catch (error) {
    console.log("error occured in saving the new user details");
    res
      .status(500)
      .json({ success: false, message: "couldn't save the user details" });
  }
};

module.exports = { createUser };
