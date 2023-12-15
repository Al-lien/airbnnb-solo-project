const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Nursery = require("./nurseriesModel");

const disponibilitiesSchema = new Schema(
  {
    nursery_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nursery",
      required: true,
      validate: {
        validator: async function (value) {
          // Vérifier si le parent_id existe dans la collection "parent"
          const nursery = await mongoose.model("Nursery").findById(value);
          return !!nursery;
        },
        message: "Nursery with this ID does not exist.",
      },
    },
    is_booked: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    place: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Disponibility", disponibilitiesSchema);
