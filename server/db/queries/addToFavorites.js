const client = require("../index");

const newFavorite = (userFavorite) => {
  const values = [
    userFavorite.user_id,
    userFavorite.brewery_id,
    userFavorite.brewery_name,
    userFavorite.Brewery_address,
    userFavorite.Brewery_city,
    userFavorite.Brewery_state,
    userFavorite.Brewery_phone,
    userFavorite.Brewery_website,
  ];

  return client
    .query(
      `INSERT INTO favorites (user_id,
    brewery_id,
    name,
    street,
   city,
   state,
   phone,
   website_url) 
      values($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      values
    )
    .then((favorites) => {
      return favorites.rows;
    });
};

const cleanFavorite = (userId) => {
  return client.query(`DELETE FROM favorites WHERE user_id= $1;`, [userId]);
};

const getFavorite = (userId) => {
  return client
    .query(`SELECT * FROM favorites WHERE user_id= $1;`, [userId])
    .then((favorites) => {
      return favorites.rows;
    });
};

module.exports = {
  newFavorite,
  cleanFavorite,
  getFavorite,
};
