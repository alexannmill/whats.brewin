import { useEffect, useState } from "react";
import axios from "axios";
import "./BreweryProfile.css"
import Post from "./Post"
import Logo from "../nav & footer/imgs/logo3.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {useParams} from "react-router-dom";
import Event from "./Event";

import { motion } from "framer-motion"


// //props breweryName
export default function BreweryProfile() {
  const [brewery, setBrewery] = useState({});

  // From React Router
  let { brewery_id } = useParams();

  const formatPhone = (phoneNum) => {
    if (!phoneNum) return "Not Available";

    return `(${phoneNum.substring(0, 3)})-${phoneNum.substring(
      3,
      6
    )}-${phoneNum.substring(6)}`;
  };

  // Find breweries for map by brewery
  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${brewery_id}`)
      .then((res) => {
        const incomingData = res.data
        setBrewery({
          name: incomingData.name,
          street: incomingData.street,
          brewery_type: incomingData.brewery_type,
          state: incomingData.state,
          country: incomingData.country,
          postal_code: incomingData.postal_code,
          phone: incomingData.phone,
          website_url: incomingData.website_url,
        });
        });
      }, [brewery_id]);
      

  return (
    <motion.div className="page"
    initial={{translateY: "100%"}}
    animate={{translateY: "0%"}}
    exit={{translateY: "-100%", transition: {ease: "linear", duration: 0.125}}}
    >
        <div className="brewery-title">
          <h1 >{brewery.name}</h1>
        </div>
        <div className="under-header">
      <div className="left-side">
        <div className="brewery-image">
          <img className="brewery-img" src={Logo} alt="Brewery Img"></img>
        </div>
        <br/>
        <div className="info-container">
          <div>
            <div className="brewery-address">
              <h1><FontAwesomeIcon icon={faMapLocationDot}/> {brewery.street}</h1>
              <h1>{brewery.state}, USA, {brewery.postal_code}</h1>
            </div>
            <div className="brewery-contact">
              <a target="_blank" href={brewery.website_url}><FontAwesomeIcon icon={faGlobe}/> {brewery.website_url}</a>
              <h1> <FontAwesomeIcon icon={faPhone}/> {formatPhone(brewery.phone)}</h1>
            </div>
          </div>
        </div>
        <div className="events-container">
          <div className="header">
            <h3>Upcoming Events</h3>
          </div>
            <div>
              <Event key={brewery_id} brewery={brewery} id={2}></Event>
            </div>
            <div>
              <Event key={brewery_id} brewery={brewery} id={3}></Event>
            </div>
            <div>
              <Event key={brewery_id} brewery={brewery} id={1}></Event>
            </div>
        </div>
      </div>
      <div className="right-side">
          <div className="post-container">
            <Post id={6}/>
          </div>
          <div className="post-container">
            <Post id={2}/>
          </div>
          <div className="post-container">
            <Post id={1}/>
          </div>   
          <div className="post-container">
            <Post id={4}/>
          </div>   
          <div className="post-container">
            <Post id={5}/>
          </div>   
          <div className="post-container">
            <Post id={3}/>
          </div>    
      </div>
    </div>
    </motion.div>
  );
}
