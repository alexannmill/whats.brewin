const client = require("../index");

/**
 * Get a single user from the database given their email.
 * @param {String} id from random being filled out
 * @return {Promise<{}>} A promise to the client
 */

const getPostById = (id) => {
  return client
  .query(
    `SELECT *
    FROM posts_img
    WHERE id = $1 
      `,
      [id]
    )
    .then((result) => {
      const post = result.rows[0];
      return post;
    })
    .catch((err) => err);
};


const createPost = (post) => {
  return client
    .query(
      `INSERT INTO posts_img
      (user_id, caption, date, filename, filepath, mimetype, size) 
      values($1,$2,$3,$4, $5, $6, $7) RETURNING *`,
      [post.user_id, post.caption, post.date, post.filename, post.filepath, post.mimetype, post.size]
    )
    .then((post) => {
      console.log('postQ:', post)
      return post.rows[0];
    });
};
// const createPost = (post) => {
//   return client
//     .query(
//       `INSERT INTO posts 
//       (brewer_id, caption, date, photo_url) 
//       values($1,$2,$3,$4) RETURNING *`,
//       [post.brewer_id, post.caption, post.date, post.photo_url]
//     )
//     .then((post) => {
//       console.log('postQ:', post)
//       return post.rows[0];
//     });
// };

module.exports = {
  getPostById,
  createPost,
};