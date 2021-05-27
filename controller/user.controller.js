const { User } = require("../models/user.model.js");

const createUser = async (req, res) => {
  try {
    const { userName, userPassword } = req.body;
    const user = { userName, userPassword };
    const NewUser = new User(user);
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
