require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const citiesRouter = require("./routes/cities");
const PORT = process.env.PORT;
const app = express();
const cookieSession = require("cookie-session");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cookieSession({
    name: "session",
    keys: ["user_id"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cities", citiesRouter);

app.listen(PORT, () => {
  console.log("listening.. " + PORT);
});
module.exports = app;
