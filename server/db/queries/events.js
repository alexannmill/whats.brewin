const client = require("../index");

/**
 * Get a single user from the database given their email.
 * @param {String} id from random being filled out
 * @return {Promise<{}>} A promise to the client
 */

const getEventById = (id) => {
  return client
  .query(
    `SELECT *
    FROM events
    WHERE id = $1 
      `,
      [id]
    )
    .then((result) => {
      const event = result.rows[0];
      return event;
    })
    .catch((err) => err);
};

module.exports = {
  getEventById,
};