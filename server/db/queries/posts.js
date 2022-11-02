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

module.exports = {
  getPostById,
};