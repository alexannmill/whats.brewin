const client = require("../index");

const createUser = (user) => {
  return client
    .query(
      "INSERT INTO users (username, email, password,brewery) values($1,$2,$3,$4) RETURNING *",
      [user.name, user.email, user.password, user.brewery]
    )
    .then((users) => {
      return users.rows;
    });
};

const getUserByEmail = (email) => {
  return client
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then((users) => {
      return users.rows;
    });
};

module.exports = {
  createUser,
  getUserByEmail,
};
