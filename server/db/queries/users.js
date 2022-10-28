const client = require("../index");

const createUser = (user) => {
  return client
    .query("INSERT INTO users (username, email, password) values($1,$2,$3)", [
      user.name,
      user.email,
      user.password,
    ])
    .then((users) => {
      return users.rows;
    });
};

module.exports = {
  createUser,
};
