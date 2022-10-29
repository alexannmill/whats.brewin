const express = require("express");
const router = express.Router();

/* GET cities for search listing. */
router.get("/:select", function (req, res, next) {
  const search = req.params;
  console.log("search:", search);
  // console.log(req.body);
  res.send("respond with a resource");
});

module.exports = router;
