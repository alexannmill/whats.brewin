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
    FROM posts
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
      `INSERT INTO post 
      (brewer_id, caption, date, photo_url) 
      values($1,$2,$3,$4) RETURNING *`,
      [post.brewer_id, post.caption, post.date, post.photo_url]
    )
    .then((post) => {
      console.log('post:', post)
      return post.rows[0];
    });
};

module.exports = {
  getPostById,
  createPost,
};