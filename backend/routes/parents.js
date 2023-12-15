const express = require("express");
const {
  getAllParents,
  getSingleParent,
  createParent,
  updateParent,
  deleteParent,
} = require("../controllers/parentController");

const router = express.Router();

router.get("/", getAllParents);

router.get("/:id", getSingleParent);

router.post("/", createParent);

router.patch("/:id", updateParent);

router.delete("/:id", deleteParent);

module.exports = router;
