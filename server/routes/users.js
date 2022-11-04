const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { createUser, getUserByEmail } = require("../db/queries/users");
const { getFavorite } = require("../db/queries/addToFavorites");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res) {
  getUserByEmail(req.body.email).then((user) => {
    const password = req.body.password;
    if (!user.length || !bcrypt.compareSync(password, user[0].password)) {
      res.status(400);
    }

    getFavorite(user[0].id).then((brews) => {
      const data = { user: user[0], fav: [...brews] };

      res.json(data);
    });
  });
});

router.post("/register", function (req, res) {
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    brewery: req.body.brewery ? 1 : 0,
  };

  getUserByEmail(req.body.email).then((d) => {
    if (req.body.email === "" || d.length) {
      res.status(400);
    }

    createUser(newUser).then((e) => {
      req.session.user_id = e[0].id;
      res.json(e[0]);
    });
  });
});

router.post("/logout", (req, res) => {
  console.log(req.body);
  // req.session = null;
  // res.json();
});

module.exports = router;
