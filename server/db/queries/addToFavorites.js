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
    brewery_name,
    Brewery_address,
    Brewery_city,
    Brewery_state,
    Brewery_phone,
    Brewery_website) 
      values($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      values
    )
    .then((favorites) => {
      console.log(
        "This is from DB backend, you added a new favorites to DB: ",
        favorites.rows
      );
      return favorites.rows;
    });
};

const cleanFavorite = (userId) => {
  return client.query(
    `DELETE FROM favorites WHERE user_id= $1;
 `,
    [userId]
  );
};

module.exports = {
  newFavorite,
  cleanFavorite,
};
