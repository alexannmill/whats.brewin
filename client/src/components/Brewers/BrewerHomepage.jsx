import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { brewerContext } from "../../Contexts/BrewerContext";
import { LoginContext } from "../../Contexts/LoginContext";
import "./Brewers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../nav & footer/imgs/logo3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BrewerPost from "./BrewerPost";

export default function App() {
  const { user } = useContext(LoginContext);
  const { brewer, setBrewer } = useContext(brewerContext);
  console.log("brewerLOAD:", brewer);

  console.log("user:", user.id);

  // const userID = () => {
  //   if (!user) {
      
  //   }
  // }
    // Find breweries for map by brewery
    useEffect(() => {
      axios
        .get(`/brewers/home`)
        .then((res) => {
          const incomingData = res.data
          setBrewer({
            user_id: user.id,
            brewery: incomingData.brewery,
            street_number: incomingData.street_number,
            street: incomingData.street,
            city: incomingData.city,
            state_prov: incomingData.state_prov,
            post_zip: incomingData.post_zip,
            website: incomingData.website,
            phone: incomingData.phone,
            filename: incomingData.filename,
            mimetype: incomingData.mimetype,
            filepath: incomingData.path,
            size: incomingData.size
          });
          console.log('brewerPOSTAXIOS:', brewer)
          const imgpath = (`${__dirname}server/${incomingData.filepath}`)
          console.log('imgpath:', imgpath)
        });
    }, []);
        
  return (
    <motion.div
      className=" "
      initial={{ translateY: "100%" }}
      animate={{
        translateY: "0%",
        transition: { ease: "easeInOut", duration: 0.5 },
      }}
      exit={{
        translateY: "-200%",
        transition: { ease: "easeInOut", duration: 0.75 },
      }}
    >
      <div className="overflow-scroll home-page bg-cover bg-center">
        <div className="brewery-title">
          <h1>{brewer.brewery}</h1>
        </div>
        <div className="row">
        <div className="left-side">
          <div className="brewer-image">
            <img className="brewer-img" src={`/server/${brewer.filepath}`} alt="Brewery Img"></img>
          </div>
          <br />
          <div className="info-container">
            <div>
              <div className="brewer-address">
                <h1>
                  <FontAwesomeIcon icon={faMapLocationDot} />{" "}
                  {brewer.street_number}
                  {brewer.street}
                </h1>
                <h1>
                  {brewer.state_prov}, USA, {brewer.post_zip}
                </h1>
              </div>
              <br />
              <div className="brewer-contact">
                <a target="_blank" href={brewer.website}>
                  <FontAwesomeIcon icon={faGlobe} /> {brewer.website}
                </a>
                <h1>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> {brewer.phone}
                </h1>
              </div>
            </div>
          </div>
          <Link to="brewers/edit">
            <button className="edit-button">Edit Brewery Info</button>
          </Link>
        </div>
        <div className="right-side">
          <BrewerPost />
        </div>
        </div>
      </div>
    </motion.div>
  );
}
