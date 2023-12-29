const express = require("express");

// controller function
const {
  getAllUsers,
  loginUser,
  signupUser,
} = require("../controllers/usercontroller");

const router = express.Router();

// get user route
router.get("/", getAllUsers);
// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;
