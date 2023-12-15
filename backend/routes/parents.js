const express = require("express");
const Parent = require("../models/parentsModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all parents" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "GET single parent" });
});

router.post("/", async (req, res) => {
  const { firstname, lastname, address, phone, email } = req.body;

  try {
    const parent = await Parent.create({
      firstname,
      lastname,
      address,
      phone,
      email,
    });
    res.status(200).json(parent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE parents" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE parents" });
});

module.exports = router;
