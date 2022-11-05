const express = require("express");
const router = express.Router();
const { editBrewer } = require("../db/queries/brewers");

/* GET brewers listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/edit", function (req, res) {
  console.log('req:', req.body)
  const newBrewer = {
    user_id: req.session.user_id,
    brewery: req.body.brewery,
    street_number: req.body.street_number,
    street: req.body.street,
    city: req.body.city,
    state_prov: req.body.state_prov,
    post_zip: req.body.post_zip,
    website: req.body.website,
    phone: req.body.phone,
  };
  editBrewer(newBrewer).then((e) => {
    req.session.brewer_id = e[0].id;
    res.json(e[0]);
  });
});



router.post("/logout", (req, res) => {
  req.session = null;
  res.json();
});

module.exports = router;
