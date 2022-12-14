const express = require("express");
const router = express.Router();
// function here for db querying
const { newFavorite, cleanFavorite } = require("../db/queries/addToFavorites");

// GETs
// router.get("/", (req, res) => {
//   console.log(req);
// });

// POSTs
router.post("/", (req, res) => {
  const brews = req.body.favoritedBreweries;
  if (!brews.length) {
    res.json("bye");
  }

  cleanFavorite(req.body.id);
  for (let b of brews) {
    const userFavorite = {
      user_id: req.body.id,
      brewery_id: b.id,
      brewery_name: b.name,
      Brewery_address: b.street,
      Brewery_city: b.city,
      Brewery_state: b.state,
      Brewery_phone: b.phone,
      Brewery_website: b.website_url,
    };
    newFavorite(userFavorite);
    req.session = null;
    res.json("bye");
  }
});

module.exports = router;
