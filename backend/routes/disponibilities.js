const express = require("express");
const {
  getAllDisponibilities,
  getSingleDisponibility,
  createDisponibility,
  updateDisponibility,
  deleteDisponibility,
} = require("../controllers/disponibilitiesController");

const router = express.Router();

router.get("/", getAllDisponibilities);

router.get("/:id", getSingleDisponibility);

router.post("/", createDisponibility);

router.patch("/:id", updateDisponibility);

router.delete("/:id", deleteDisponibility);

module.exports = router;
