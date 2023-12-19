const Child = require("../models/childrenModel");
const mongoose = require("mongoose");

const getAllChildren = async (req, res) => {
  const children = await Child.find({}).sort({ createdAt: -1 });
  res.status(200).json(children);
};

const getSingleChild = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such child" });
  }

  const child = await Child.findById(id);

  if (!child) {
    return res.status(404).json({ error: "No such child" });
  }

  res.status(200).json(child);
};

const createChild = async (req, res) => {
  const {
    parent_id,
    firstname,
    lastname,
    birthday,
    walking,
    disabled,
    allergy,
  } = req.body;

  try {
    const child = await Child.create({
      parent_id,
      firstname,
      lastname,
      birthday,
      walking,
      disabled,
      allergy,
    });
    res.status(200).json(child);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateChild = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such child" });
  }

  const child = await Child.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!child) {
    return res.status(400).json({ error: "No such child" });
  }

  res.status(200).json(child);
};

const deleteChild = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such child" });
  }

  const child = await Child.findOneAndDelete({ _id: id });

  if (!child) {
    return res.status(400).json({ error: "No such child" });
  }

  res.status(200).json(child);
};

module.exports = {
  getAllChildren,
  getSingleChild,
  createChild,
  updateChild,
  deleteChild,
};
