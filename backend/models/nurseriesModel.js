const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nurseriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    place_max: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nursery", nurseriesSchema);
