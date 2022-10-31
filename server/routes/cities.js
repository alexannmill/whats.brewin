const express = require("express");
const router = express.Router();
const { getCitiesBySearch } = require("../db/queries/searchbar_cities");

// ---- Initial page render
router.get("/", (req, res) => {
  res.status(200).send("connected to cities");
});

// ---- Return cities based on search
router.get("/:select", function (req, res, next) {
  const search = req.params.select;
  getCitiesBySearch(search).then((result) => {
    res.send(result);
  });
});

module.exports = router;
