import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./BreweryProfile.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";


const Event = (props) => {
  
  const [event, setEvent] = useState({});

  const id = props.id
  useEffect(() => {
    axios.get(`/events/${id}`)
      .then((res) => {
        const event = res.data
        setEvent(event)
      })
  },[])

  return (
    <div className="event">
      <div className="event-content">
        <div className="event-left">
          <h6 className="event-date">
            <FontAwesomeIcon className="calendar" icon={faCalendar} />
            <div>{event.date}</div>
          <h6 className="event-likes">$ {event.ticket_price}</h6>
          </h6>
        </div>
        <div className="event-right">
          <h4 className="event-title">{event.event_name}</h4>
          <h6 className="event-address">
            {event.location}, {props.brewery.city} {props.brewery.state} USA</h6>
          <h6 className="event-likes">{event.description}</h6>
        </div>
      </div>
    </div>
  );
};

export default Event;