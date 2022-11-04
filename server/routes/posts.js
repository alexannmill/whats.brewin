const express = require("express");
const router = express.Router();
const { getPostById } = require("../db/queries/posts");

// ---- Initial page render
router.get("/", (req, res) => {
  res.status(200).send("connected to cities");
});

// ---- Return post based on search
router.get("/:id", (req, res) => {
  const id = req.params.id;

  getPostById(id).then((result) => {
    res.send(result);
  });
});

module.exports = router;
