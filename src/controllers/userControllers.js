const User = require("../models/user");
const mongoose = require("mongoose");
require("dotenv").config();

exports.registerUser = async (request, response, next) => {
  let { username, password } = request.body;

  //check if user exist wih the same username
  let existingUser = await User.findOne({ username: username });

  if (!existingUser) {
    let newUser = new User({
      username,
      password,
    });
    let displayUser = await newUser.save();
    return response.status(200).json({
      status: "Successful",
      User: displayUser,
    });
  } else {
    return response.status(400).json({
      status: "Error",
      message: "Cannot save User,Please try again later",
    });
  }
};
