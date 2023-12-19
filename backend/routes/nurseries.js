const express = require("express");
const {
  getAllNurseries,
  getSingleNursery,
  createNursery,
  updateNursery,
  deleteNursery,
} = require("../controllers/nurseryController");

const router = express.Router();

router.get("/", getAllNurseries);

router.get("/:id", getSingleNursery);

router.post("/", createNursery);

router.patch("/:id", updateNursery);

router.delete("/:id", deleteNursery);

module.exports = router;
