const express = require("express");
const router = express.Router();
const { getEventById, createEvent } = require("../db/queries/events");

// ---- Initial page render
router.get("/", (req, res) => {
  res.status(200).send("connected to cities");
});

// ---- Return event based on search
router.get("/:id", (req, res) => {
  const id = req.params.id;
  getEventById(id).then((result) => {
    res.send(result);
  });
});

// ---- Creating new Event
router.post("/new", (req, res) => {
  console.log("From EventsRouter, req.body: ", req.body);
  console.log("From EventsRouter, req.params: ", req.params);
  console.log("From EventsRouter, req.session: ", req.session);

  createEvent(req.body).then((dbRes) => {
    console.log("In events routes, dbRes: ", dbRes);
    res.send(dbRes);
  });
});
module.exports = router;
