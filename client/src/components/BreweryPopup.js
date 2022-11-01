import React from "react";
// ----- Components -----
import LikeButton from "./LikeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  const formatPhone = (phoneNum) => {
    if (!phoneNum) return "Not Available";

    return `(${phoneNum.substring(0, 3)})-${phoneNum.substring(
      3,
      6
    )}-${phoneNum.substring(6)}`;
  };

  // NOTE: We actually can put an image in here if we wanted to
  return (
    <>
      <header className="brewery-nameplate">
        <a
          href={`${brewery.website_url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{brewery.name}</h3>
        </a>
      </header>

      <section className="brewery-details-container">
        <button className="brewery-detail group ">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="detail-icons group-hover:text-[#2193b0]"
          />
          <p className="brewery-detail-text">
            {brewery.street}, {brewery.city}, {brewery.state}
          </p>
        </button>

        <button className="brewery-detail group ">
          <a
            href={`${brewery.website_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGlobe}
              className="detail-icons group-hover:text-[#2193b0]"
            />
          </a>
          <a
            href={`${brewery.website_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="brewery-detail-text">{brewery.website_url}</p>
          </a>
        </button>

        <button className="brewery-detail group flex-row">
          <FontAwesomeIcon
            icon={faPhone}
            className="detail-icons group-hover:text-[#2193b0]"
          />
          <p className="brewery-detail-text">{formatPhone(brewery.phone)}</p>
        </button>

        <LikeButton 
          brewery={brewery}
        />
      </section>
    </>
  );
};

export default BreweryPopup;