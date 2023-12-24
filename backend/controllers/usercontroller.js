const User = require("../models/userModel");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ error: "Can't find any users" });
  }
};

// login user
const loginUser = async (req, res) => {
  res.json({ message: "Login user" });
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers, loginUser, signupUser };
