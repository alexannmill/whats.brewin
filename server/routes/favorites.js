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
  for (let b of brews) {
    const userFavorite = {
      user_id: b.user_id,
      brewery_id: b.brewery_id,
      brewery_name: b.brewery_name,
      Brewery_address: b.Brewery_address,
      Brewery_city: b.Brewery_city,
      Brewery_state: b.Brewery_state,
      Brewery_phone: b.Brewery_phone,
      Brewery_website: b.Brewery_website,
    };
    newFavorite(userFavorite);
  }
});

module.exports = router;
