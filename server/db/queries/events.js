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

const createEvent = (event) => {
  return client
    .query(
      `INSERT INTO brewers 
      (brewer_id, event_name, date, location, street, ticket_link, ticket_price, description)
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [brewer.brewer_id, brewer.event_name, brewer.date, brewer.location, brewer.street, brewer.ticket_link, brewer.ticket_price, brewer.description]
    )
    .then((event) => {
      return event.rows[0];
    });
};
module.exports = {
  getEventById,
};