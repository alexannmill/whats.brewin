const express = require("express");
const router = express.Router();
const { editBrewer, getBrewerByUserID } = require("../db/queries/brewers");
const path = require('path')
const multer  = require('multer')
let imageName = "";
const storage = multer.diskStorage({
  destination: path.join("./image"),
  filename: function (req, file, cb) {
    imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
});


/* GET brewers listing. */
router.get("/home", function (req, res, next) {
  const id = req.session.user_id
  getBrewerByUserID(id).then((data) => {
   if(data) { 
    const rootPath =  {root: path.join(__dirname, "public")}
    res.type("jpeg").sendFile(data.filename, {root: path.join(__dirname, "image")})
    res.json({...data, rootPath});
  }
  });
  res.status(200)
});


// ---- Edit Brewery/ Add Brewer
router.post("/edit", upload.single('logo'),function (req, res) {
  const imgdata = req.file
  const data = req.body
  const path = `${req.protocol}://${req.host}:${process.env.PORT}/image` 
  const newBrewer = {
    user_id: req.session.user_id,
    brewery: data.brewery,
    street_number: data.street_number,
    street: data.street,
    city: data.city,
    state_prov: data.state_prov,
    post_zip: data.post_zip,
    website: data.website,
    phone: data.phone,
    filename: imgdata.filename,
    mimetype: imgdata.mimetype,
    filepath: path,
    size: imgdata.size
  };
  editBrewer(newBrewer).then((e) => {
    req.session.brewer_id = e[0].id;
    res.status(200)
  });
});



router.post("/logout", (req, res) => {
  req.session = null;
  res.json();
});

module.exports = router;
