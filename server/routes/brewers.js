const express = require("express");
const router = express.Router();
const { editBrewer, getBrewerByUserID } = require("../db/queries/brewers");
const multer = require("multer")
const fs = require("fs");
const { path } = require("../app");


const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },

})

const uploads = multer({storage})

/* GET brewers listing. */
router.get("/", function (req, res, next) {
  const uploadsDir = path.join('uploads')
  fs.readdir(uploadsDir, (err, files) => {
    return res.json({files})
  })
  // getBrewerByUserID(req.body).then((data) => {
  //   res.send(data);
  // });
});

router.post("/edit",  uploads.single('image'), (req, res) => {
  const img = req.file.path
  console.log('img:', img)
  console.log("req:", req.body);
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
