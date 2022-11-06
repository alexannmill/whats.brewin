import "./Brewers.css";
import axios from "axios";
import React, { useContext, useState } from "react";
// ----- Contexts -----
// import { brewerContext } from "../../Contexts/BrewerContext";
import { LoginContext } from "../../Contexts/LoginContext";

function BrewerEvent() {
  const { user } = useContext(LoginContext);
  // const { brewer, setBrewer } = useContext(brewerContext);
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTicketPrice, setEventTicketPrice] = useState(0);
  const [eventDescription, setEventDescription] = useState("");
  const date = new Date().toISOString().slice(0, 10);

  const submitEventForm = (e) => {
    e.preventDefault();

    return axios
      .post("/events/new", {
        user_id: user.id,
        eventName,
        eventLocation,
        eventTicketPrice,
        eventDescription,
        date,
        ticket_link: "exampleticketlink.com",
      })
      .then((res) => {
        //
        // ----- Can pull this data if needed
        //
        console.log("Coming back from events db: ", res);
      });
  };

  return (
    <div className="create_events-form">
      <form onSubmit={(e) => submitEventForm(e)}>
        <div>
          <h1>Create an Event</h1>
        </div>
           <br></br>
        <div className="create_events_labels-form">
          <label>Event name: </label>
          <br></br>
          <input
            id="event-name"
            name="event-name"
            type="text"
            required
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="create_events_labels-form">
          <label>Location: </label>
          <br></br>
          <input
            id="event-location"
            name="event-location"
            type="text"
            required
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </div>
        <div className="create_events_labels-form">
          <label>Ticket Price: </label>
          <br></br>
          <input
            id="event-ticket-price"
            name="event-ticket-price"
            type="number"
            min="0"
            required
            onChange={(e) => setEventTicketPrice(e.target.value)}
          />
        </div>
        <div className="create_events_labels-form">
          <label>Event Description: </label>
          <br></br>
          <textarea
            id="event-description"
            name="event-description"
            type="text"
            required
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="create_events_labels-form">
          <button id="event-submit-button" type="submit">
            Post Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default BrewerEvent;
