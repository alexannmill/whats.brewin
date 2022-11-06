import axios from "axios";
import React, { useContext, useState } from "react";
// ----- Contexts -----
import { brewerContext } from "../../Contexts/BrewerContext";
import { LoginContext } from "../../Contexts/LoginContext";

function BrewerEvent() {
  const { user } = useContext(LoginContext);
  const { brewer, setBrewer } = useContext(brewerContext);
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTicketPrice, setEventTicketPrice] = useState(0);
  const [eventDescription, setEventDescription] = useState("");
  const date = new Date().toISOString().slice(0, 10);

  const submitEventForm = (e) => {
    e.preventDefault();

    return axios
      .post("events/new", {
      user_id: user.id,
      brewer: brewer.id,
      eventName,
      eventLocation,
      eventTicketPrice,
      eventDescription,
      date,
      ticket_link: "exampleticketlink.com",
    }).then((res) => {
      console.log("Coming back from events router: ", res);
    })
  };

  return (
    <div className="bg-neutral-50 w-96 h-96">
      <form onSubmit={(e) => submitEventForm(e)}>
        <h1>Create an Event</h1>

        <label>Event name: </label>
        <input
          id="event-name"
          name="event-name"
          type="text"
          required
          onChange={(e) => setEventName(e.target.value)}
        />
        <label>Location: </label>
        <input
          id="event-location"
          name="event-location"
          type="text"
          required
          onChange={(e) => setEventLocation(e.target.value)}
        />
        <label>Ticket Price: </label>
        <input
          id="event-ticket-price"
          name="event-ticket-price"
          type="number"
          min="0"
          required
          onChange={(e) => setEventTicketPrice(e.target.value)}
        />
        <label>Event Description: </label>
        <input
          id="event-description"
          name="event-description"
          type="text"
          required
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <button id="event-submit-button" type="submit">
          Post Event
        </button>
      </form>
    </div>
  );
}

export default BrewerEvent;
