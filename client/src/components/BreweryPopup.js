import React from "react";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  // NOTE: We actually can put an image in here if we wanted to
  return (
    <>
      <header>
        <a
          href={`${brewery.website_url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="brewery-nameplate">{brewery.name}</h3>
        </a>
      </header>

      <div>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>
          Address: {brewery.street}, {brewery.city}, {brewery.state}
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faLocationDot} />
        <a
          href={`${brewery.website_url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Website: {brewery.website_url}</p>
        </a>
      </div>

      <div>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>
          Address: {brewery.street}, {brewery.city}, {brewery.state}
        </p>
      </div>
    </>
  );
};

export default BreweryPopup;
