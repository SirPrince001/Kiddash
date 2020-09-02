const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.registerUser = async (request, response, next) => {
  let { username, email , password } = request.body;

  password = bcrypt.hashSync(request.body.password, 10);
  //check if user exist wih the same username
  let existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    let newUser = new User({
      username,
      email,
      password,
    });
    let displayUser = await newUser.save();
    displayUser = displayUser.toJSON();
    delete displayUser.password;

    const payload = {
      id: displayUser.id,
      username: displayUser.username,
      email:displayUser.email
    };

    const registerToken = jwt.sign(payload, process.env.SECRETE_KEY);
    return response.status(200).json({
      status: "Successful",
      User: displayUser,
      Register_Token: registerToken,
    });
  } else {
    return response.status(400).json({
      status: "Error",
      message:
        "Cannot save User, Username already exist Please try again with another Username",
    });
  }
};

exports.userLogin = async (request, response, next) => {
  const loginUser = await User.findOne({ username: request.body.username });
  if (!loginUser)
    return response.status(400).json({
      error: true,
      message: "Sorry we could not find user",
    });

  if (!bcrypt.compareSync(request.body.password, loginUser.password))
    return response.status(400).json({
      error: true,
      message: "password do not match",
    });

  return response.status(200).json({
    status: "Succesful",
    Login_User: loginUser,
  });
};
