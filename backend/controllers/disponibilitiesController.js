const Disponibility = require("../models/disponibilitiesModel");
const mongoose = require("mongoose");

const getAllDisponibilities = async (req, res) => {
  const disponibilities = await Disponibility.find({}).sort({ createdAt: 1 });
  res.status(200).json(disponibilities);
};

const getSingleDisponibility = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such disponibility" });
  }

  const disponibility = await Disponibility.findById(id);

  if (!disponibility) {
    return res.status(404).json({ error: "No such disponibility" });
  }

  res.status(200).json(disponibility);
};

const createDisponibility = async (req, res) => {
  const { nursery_id, is_booked, date, place } = req.body;

  try {
    const disponibility = await Disponibility.create({
      nursery_id,
      is_booked,
      date,
      place,
    });
    res.status(200).json(disponibility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDisponibility = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such disponibility" });
  }

  const disponibility = await Disponibility.findByIdAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!disponibility) {
    return res.status(404).json({ error: "No such disponibility" });
  }

  res.status(200).json(disponibility);
};

const deleteDisponibility = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such disponibility" });
  }

  const disponibility = await Disponibility.findByIdAndDelete({ _id: id });

  if (!disponibility) {
    return res.status(400).json({ error: "No such disponibility" });
  }

  res.status(200).json(disponibility);
};

module.exports = {
  getAllDisponibilities,
  getSingleDisponibility,
  createDisponibility,
  updateDisponibility,
  deleteDisponibility,
};
