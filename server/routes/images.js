const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({
  dest: 'images',
 });
const { uploadImage, getImage } = require("../db/queries/images")

/* Uploading image. */
router.post('/', upload.single('image'), function(req, res, next) {
  console.log('req.file:', req.file)
  
  const data = req.file
  const image = {
    filename: data.filename,
    mimetype: data.mimetype,
    filepath: data.path,
    size: data.size
    };
  console.log('image:', image)
  uploadImage(image)
  .then((result)=> {
    console.log('result:', result)
    res.json('/image api');
  }) 
});

module.exports = router;

/* Rendering image. */
router.get('/:filename', function(req, res, next) {
  const { filename } = req.params
  console.log('filename:', filename);
  getImage(filename)
  .then((result) => {
    console.log('resultR:', result)
    const fullFilePath = (__dirname + "/images/" + filename);
    console.log('fullFilePath:', fullFilePath)
    return res.type(result.mimetype).sendFile(fullFilePath);
  })
});
