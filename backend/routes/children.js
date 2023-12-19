const express = require("express");
const {
  getAllChildren,
  getSingleChild,
  createChild,
  updateChild,
  deleteChild,
} = require("../controllers/childController");

const router = express.Router();

router.get("/", getAllChildren);

router.get("/:id", getSingleChild);

router.post("/", createChild);

router.patch("/:id", updateChild);

router.delete("/:id", deleteChild);

module.exports = router;
