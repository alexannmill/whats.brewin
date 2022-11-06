import { motion } from "framer-motion";
import { useContext } from "react";
import { brewerContext } from "../../Contexts/BrewerContext";
import "./Brewers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../nav & footer/imgs/logo3.png";
import "./Brewers.css";
import { Link } from "react-router-dom";
import BrewerPost from "./BrewerPost";
import { LoginContext } from "../../Contexts/LoginContext";
import BrewerEvent from "./BrewerEvent";

export default function App() {
  const { user } = useContext(LoginContext);
  const { brewer } = useContext(brewerContext);
  console.log("brewer:", brewer);

  console.log("user:", user);

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
            <img className="brewer-img" src={Logo} alt="Brewery Img"></img>
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
          <Link to="brewer/edit">
            <button className="edit-button">Edit Brewery Info</button>
          </Link>
        </div>
        <div className="right-side">
          <BrewerPost />
          {/* <BrewerEvent /> */}
        </div>
        </div>
      </div>
    </motion.div>
  );
}
