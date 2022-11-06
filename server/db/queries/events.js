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
      `INSERT INTO events 
      (event_name, brewer_id, date, location, ticket_link, ticket_price, description)
      values($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [event.eventName, event.brewer_id, event.date, event.eventLocation, event.ticket_link, event.eventTicketPrice, event.eventDescription]
    )
    .then((event) => {
      return event.rows[0];
    });
};



module.exports = {
  getEventById,
  createEvent
};