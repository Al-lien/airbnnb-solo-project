const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Parent = require("./parentsModel");

const childrenSchema = new Schema(
  {
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
      required: true,
      validate: {
        validator: async function (value) {
          // Vérifier si le parent_id existe dans la collection "parent"
          const parent = await mongoose.model("Parent").findById(value);
          return !!parent;
        },
        message: "Parent with this ID does not exist.",
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
    birthday: {
      type: Date,
      required: true,
    },
    walking: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
    allergy: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Child", childrenSchema);
