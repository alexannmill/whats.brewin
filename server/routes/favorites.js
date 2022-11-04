const express = require("express");
const router = express.Router();
// function here for db querying
const { newFavorite } = require("../db/queries/addToFavorites");

// GETs
// router.get("/", (req, res) => {
//   console.log(req);
// });

// POSTs
router.post("/", (req, res) => {
  const brews = req.body.favoritedBreweries;
  console.log("brewws", brews);
  const userFavorite = {
    user_id: req.body.user_id,
    brewery_id: req.body.brewery_id,
    brewery_name: req.body.brewery_name,
    Brewery_address: req.body.Brewery_address,
    Brewery_city: req.body.Brewery_city,
    Brewery_state: req.body.Brewery_state,
    Brewery_phone: req.body.Brewery_phone,
    Brewery_website: req.body.Brewery_website,
  };
  // newFavorite(userFavorite).then((res) => {
  //   res.status(200);
  // });
});

module.exports = router;
