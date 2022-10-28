var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res) {
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const NewUser = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  };

  console.log("end poind ", req.body);
});

module.exports = router;
