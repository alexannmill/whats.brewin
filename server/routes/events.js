const express = require("express");
const router = express.Router();
const { getEventById } = require("../db/queries/events");

// ---- Initial page render
router.get("/", (req, res) => {
  res.status(200).send("connected to cities");
});

// ---- Return post based on search
router.get("/:id", (req, res) => {
  const id = req.params.id;
  getEventById(id).then((result) => {
    res.send(result);
  });
});

module.exports = router;