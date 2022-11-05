const express = require("express");
const router = express.Router();
const { getPostById, createPost } = require("../db/queries/posts");

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

router.post("/new", (req, res) => {
  const data = req.body
  const post = {
    brewer_id: data.brewer_id,
    caption: data.caption,
    photo_url: data.selectedImage,
    date: data.date,
  }
  console.log('post:', post)
  createPost(post)
  .then((result) => {
    res.send(result);
  });
});


module.exports = router;
