const Nursery = require("../models/nurseriesModel");
const mongoose = require("mongoose");

const getAllNurseries = async (req, res) => {
  const nurseries = await Nursery.find({}).sort({ createdAt: -1 });
  res.status(200).json(nurseries);
};

const getSingleNursery = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such nursery" });
  }

  const nursery = await Nursery.findById(id);

  if (!nursery) {
    return res.status(404).json({ error: "No such nursery" });
  }

  res.status(200).json(nursery);
};

const createNursery = async (req, res) => {
  const { name, address, place_max } = req.body;

  try {
    const nursery = await Nursery.create({
      name,
      address,
      place_max,
    });
    res.status(200).json(nursery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNursery = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such nursery" });
  }

  const nursery = await Nursery.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!nursery) {
    return res.status(400).json({ error: "No such nursery" });
  }

  res.status(200).json(nursery);
};

const deleteNursery = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such nursery" });
  }

  const nursery = await Nursery.findOneAndDelete({ _id: id });

  if (!nursery) {
    return res.status(400).json({ error: "No such nursery" });
  }

  res.status(200).json(nursery);
};

module.exports = {
  getAllNurseries,
  getSingleNursery,
  createNursery,
  updateNursery,
  deleteNursery,
};
