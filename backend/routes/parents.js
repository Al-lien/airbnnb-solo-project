const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all parents" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "GET single parent" });
});

router.post("/", (req, res) => {
  res.json({ message: "CREATE parents" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE parents" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE parents" });
});

module.exports = router;
