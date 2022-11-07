require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors")

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const citiesRouter = require("./routes/cities");
const postsRouter = require("./routes/posts");
const eventsRouter = require("./routes/events");
const brewersRouter = require("./routes/brewers");
const favoritesRouter = require("./routes/favorites");
const imagesRouter = require("./routes/images");
const PORT = process.env.PORT;
const app = express();
const cookieSession = require("cookie-session");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("uploads"));
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
app.use("/posts", postsRouter);
app.use("/events", eventsRouter);
app.use("/brewers", brewersRouter);
app.use("/favorites", favoritesRouter);
app.use("/images", imagesRouter);

app.listen(PORT, () => {
  console.log(`listening.. ${PORT}`);
});
module.exports = app;
