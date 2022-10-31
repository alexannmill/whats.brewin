const client = require("../index");

/**
 * Get a single user from the database given their email.
 * @param {String} search from search bar being filled out
 * @return {Promise<{}>} A promise to the client
 */

const getCitiesBySearch = (search) => {
  return client
    .query(
      `SELECT *
      FROM cities
      WHERE city ILIKE concat('%', $1::VARCHAR, '%')
      `,
      [search]
    )
    .then((result) => {
      const returnCities = result.rows;
      return returnCities;
    })
    .catch((err) => err);
};

module.exports = {
  getCitiesBySearch,
};
