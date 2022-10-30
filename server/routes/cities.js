const express = require("express");
const router = express.Router();
const { getCitiesBySearch } = require("../db/queries/searchbar_cities");

// ---- Initial page render
router.get("/", (res, req) => {
  res.send("connected to cities");
});

// ---- Return cities based on search
router.get("/:select", function (req, res, next) {
  console.log("citiessssssssssss!");
  const search = req.params;
  getCitiesBySearch(search).then((result) => {
    const returnCities = result.rows;
    console.log("returnCities:", returnCities);
  });
  res.send("connected to cities");
  // res.json(cities);
});

module.exports = router;
