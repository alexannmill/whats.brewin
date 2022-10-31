import React from "react";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faGlobe,
  faPhone,
  faBeerMugEmpty,
} from "@fortawesome/free-solid-svg-icons";

const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  const formatPhone = (phoneNum) => {
    return `(${phoneNum.substring(0, 3)})-${phoneNum.substring(
      3,
      6
    )}-${phoneNum.substring(6)}`;
  };

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

      <ul>
        <li>
          <FontAwesomeIcon icon={faMapLocationDot} />
          <p>
            {brewery.street}, {brewery.city}, {brewery.state}
          </p>
        </li>

        <li>
          <a
            href={`${brewery.website_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <p>{brewery.website_url}</p>
          </a>
        </li>

        <li>
          <FontAwesomeIcon icon={faPhone} />
          <p>{formatPhone(brewery.phone)}</p>
        </li>

        <li>
          <FontAwesomeIcon icon={faBeerMugEmpty} />
          <p>Favorite</p>
        </li>
      </ul>
    </>
  );
};

export default BreweryPopup;
