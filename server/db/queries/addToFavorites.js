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
      `INSERT INTO favorites (user_id, brewery_id) 
      values($1, $2)`,
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

module.exports = {
  newFavorite,
};
