const express = require("express");
const router = express.Router();
// const { getCityByName } = require("../helpers/dbHelpers");

/* GET cities for search listing. */
router.get("/:select", function (req, res) {
  const search = req.params;
  const cities = getCityByName(search);
  console.log("search:", search);
  // console.log(req.body);
  res.send("respond with a resource");
  res.json(cities);
});

module.exports = router;
