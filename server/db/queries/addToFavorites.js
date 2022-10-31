const client = require("../index");

const newFavorite = (userFavorite) => {
  const values = [user_id, brewery_id];

  return client
    .query(
      `INSERT INTO favorites (user_id, brewery_id) 
      values($1, $2) RETURNING *`,
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
