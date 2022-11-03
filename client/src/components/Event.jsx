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

  console.log('props:', props)

  const id = Math.floor(Math.random() * 100)
  useEffect(() => {
    axios.get(`/events/${id}`)
      .then((res) => {
        const event = res.data
        setEvent(event)
        console.log('event:', event)
      })
  },[])

  return (
    <div className="event">
      <div className="event-content">
        <div className="event-left">
          <h6 className="event-caption">
            <FontAwesomeIcon icon={faCalendar} />
            {event.date}
          </h6>
        </div>
        <div className="=event-right">
          <h6 className="event-likes">
          <h4 className="event-caption">{event.event}</h4>
            {event.location}, {props.brewery.city} {props.brewery.state} USA</h6>
          <h6 className="event-likes">$ {event.ticket_price}</h6>
          <h6 className="event-likes">{event.description}</h6>
          <h6 className="event-date">{event.ticket_link}</h6>
        </div>
      </div>
    </div>
  );
};

export default Event;