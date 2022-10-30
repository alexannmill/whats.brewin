const client = require("../index");

/**
 * Get a single user from the database given their email.
 * @param {String} search from search bar being filled out
 * @return {Promise<{}>} A promise to the client
 */

const getCitiesBySearch = (search) => {
  const query = {
    text: `SELECT *
    FROM cities
    WHERE name = $1 %
    `,
    values: search,
  };

  return client
    .query(query)
    .then((result) => {
      const returnCities = result.rows;
      console.log("returnCities:", returnCities);
    })
    .catch((err) => err);
};

module.exports = {
  getCitiesBySearch,
};
