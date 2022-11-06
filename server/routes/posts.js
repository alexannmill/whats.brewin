const express = require("express");
const router = express.Router();
const { getPostById, createPost } = require("../db/queries/posts");
const multer  = require('multer')
const upload = multer({
  dest: 'images',
 });
const { uploadImage, getImage } = require("../db/queries/images")

// ---- Initial page render
router.get("/", (req, res) => {
  res.status(200).send("connected to cities");
});

// ---- Return post based on search
router.get("/:id", (req, res) => {
  const id = req.params.id;

  getPostById(id).then((result) => {
    res.send(result);
  });
});

// ---- New Post from Brewer

router.post("/new", upload.single('image'), (req, res) => {
  const data = req.body
  const imgdata = req.file
  const post = {
    brewer_id: 1,
    caption: data.caption,
    photo_url: data.selectedImage,
    date: data.date,
    filename: imgdata.filename,
    mimetype: imgdata.mimetype,
    filepath: imgdata.path,
    size: imgdata.size
  }
  console.log('postROUTE:', post)
  createPost(post)
  .then((result) => {
    res.send(result);
  });
});


// router.post("/new", (req, res) => {
//   const data = req.body
//   const post = {
//     brewer_id: data.brewer_id,
//     caption: data.caption,
//     photo_url: data.selectedImage,
//     date: data.date,
//   }
//   console.log('postROUTE:', post)
//   createPost(post)
//   .then((result) => {
//     res.send(result);
//   });
// });


module.exports = router;
