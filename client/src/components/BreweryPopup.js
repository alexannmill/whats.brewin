// ----- React and Utils -----
import React from "react";
import { Link } from "react-router-dom";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MoreDetailsButton from "./MoreDetailsButton";

const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  const formatPhone = (phoneNum) => {
    if (!phoneNum) return "Not Available";

    return `(${phoneNum.substring(0, 3)})-${phoneNum.substring(
      3,
      6
    )}-${phoneNum.substring(6)}`;
  };
  const url = `https://google.com/maps/search/?api=1&query=${brewery.name}`;
  const phone = `tel:${brewery.phone}`;
  // NOTE: We actually can put an image in here if we wanted to
  return (
    <>
      <header className="brewery-nameplate text-center ">
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
          <a href={url} target="_blank" rel="noreferer">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="detail-icons group-hover:text-[#2193b0]"
            />
          </a>
          <a href={url} target="_blank" rel="noreferer">
            <p className="brewery-detail-text">
              {brewery.street}, {brewery.city}, {brewery.state}
            </p>
          </a>
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

        <button className="brewery-detail group flex-row group-hover:text-[#2193b0]">
          <a href={phone}>
            <FontAwesomeIcon
              icon={faPhone}
              className="detail-icons group-hover:text-[#2193b0]"
            />
          </a>
          <a href={phone}>
            <p className="brewery-detail-text">{formatPhone(brewery.phone)}</p>
          </a>
        </button>

        <Link
          to={`/brewery/${brewery.id}`}
          className="brewery-detail group cursor-pointer"
        >
          <MoreDetailsButton />
        </Link>
      </section>
    </>
  );
};

export default BreweryPopup;
