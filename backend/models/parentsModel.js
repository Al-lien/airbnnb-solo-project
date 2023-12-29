const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const User = require("./userModel");

const parentsSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      validate: {
        validator: async function (value) {
          // Vérifier si le user_id existe dans la collection "user"
          const user = await mongoose.model("User").findById(value);
          return !!user;
        },
        message: "User with this ID does not exist.",
      },
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parent", parentsSchema);
