const Parent = require("../models/parentsModel");

const mongoose = require("mongoose");

const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find({}).sort({ createdAt: -1 });
    res.status(200).json(parents);
  } catch (error) {
    return res.status(404).json({ error: "Can't find any parent" });
  }
};

const getSingleParent = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such parent" });
    }

    const parent = await Parent.findById(id);
    if (!parent) {
      return res.status(404).json({ error: "No such parent" });
    }

    res.status(200).json(parent);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const createParent = async (req, res) => {
  const { user_id, firstname, lastname, address, phone, email, password } =
    req.body;

  try {
    const parent = await Parent.create({
      user_id,
      firstname,
      lastname,
      address,
      phone,
      email,
      password,
    });
    res.status(200).json(parent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateParent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such parent" });
  }

  const parent = await Parent.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!parent) {
    return res.status(400).json({ error: "No such parent" });
  }

  res.status(200).json(parent);
};

const deleteParent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such parent" });
  }

  const parent = await Parent.findOneAndDelete({ _id: id });

  if (!parent) {
    return res.status(400).json({ error: "No such parent" });
  }

  res.status(200).json(parent);
};

module.exports = {
  getAllParents,
  getSingleParent,
  createParent,
  updateParent,
  deleteParent,
};
