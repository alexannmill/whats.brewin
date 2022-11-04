const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { createUser } = require("../db/queries/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res) {
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  };
  createUser(newUser).then((e) => {
    console.log(e[0].id);
    req.session.user_id = e[0].id;
    res.json(e[0]);
  });
});

router.post("/login", function (req, res) {
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  };
  createUser(newUser).then((e) => {
    console.log(e[0].id);
    req.session.user_id = e[0].id;
    res.json(e[0]);
  });
});

router.post("/logout", (req, res) => {
  req.session = null;
  res.json();
});

module.exports = router;
