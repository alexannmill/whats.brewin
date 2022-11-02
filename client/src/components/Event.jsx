import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./BreweryProfile.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalender,
} from "@fortawesome/free-solid-svg-icons";


const Event = () => {
  
  const [event, setEvent] = useState({});

  const id = Math.floor(Math.random() * 100)
  useEffect(() => {
    axios.get(`/events/${id}`)
      .then((res) => {
        const event = res.data
        setEvent(event)
      })
  },[])

  return (
    <div className="event">
      <div className="event-img">
        <img src={event.photo_url} alt="event"></img>
      </div>
      <div className="event-content">
        <h4 className="event-caption">{event.caption}</h4>
        <h6 className="event-likes">
          <FontAwesomeIcon icon={faCalender} />
           {event.likes}</h6>
        <h6 className="event-date">{event.date}</h6>
      </div>
    </div>
  );
};

export default Event;