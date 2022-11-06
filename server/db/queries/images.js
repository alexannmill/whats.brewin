const client = require("../index");

/**
 * Get a single user from the database given their email.
 * @param {String} id from random being filled out
 * @return {Promise<{}>} A promise to the client
 */

const uploadImage = (image) => {
  return client
    .query(
      `INSERT INTO images
      (filename, filepath, mimetype, size) 
      values($1,$2,$3,$4) RETURNING *`,
      [image.filename, image.filepath, image.mimetype, image.size]
    )
    .then((result) => {
      const image = result.rows[0]
      console.log('imageQ:', image)
      return image;
    });
};


const getImage = (filename) => {
  return client
  .query(
    `SELECT *
    FROM images
    WHERE filename = $1 
      `,
      [filename]
    )
    .then((result) => {
      const image = result.rows[0];
      console.log('imageQ:', image)
      return image;
    })
    .catch((err) => err);
};



module.exports = {
  uploadImage,
  getImage,
};