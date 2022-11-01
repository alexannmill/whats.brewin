const express = require("express");
const router = express.Router();
// function here for db querying
const { newFavorite } = require('../db/queries/addToFavorites');

// GETs
router.get("/", (req, res) => {
  console.log(req);
})

// POSTs
router.post("/", (req, res) => {
  // const userFavorite = req.[something here]
  newFavorite(userFavorite).then((res) => {
    res.status(200);
  })
})




// DELETEs