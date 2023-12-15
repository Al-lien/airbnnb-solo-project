const express = require("express");
const {
  getAllParents,
  getSingleParent,
  createParent,
} = require("../controllers/parentController");

const router = express.Router();

router.get("/", getAllParents);

router.get("/:id", getSingleParent);

router.post("/", createParent);

router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE parents" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE parents" });
});

module.exports = router;
