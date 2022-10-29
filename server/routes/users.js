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
  createUser(newUser).then((e) => res.json(e));
});

module.exports = router;
