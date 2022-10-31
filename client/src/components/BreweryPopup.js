import React from "react";

const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  // NOTE: We actually can put an image in here if we wanted to
  return (
    <>
      <header>
        <a href={`${brewery.website_url}`} target="_blank" rel="noopener noreferrer">
          <h3 className="brewery-nameplate" >{brewery.name}</h3>
        </a>
      </header>
      <div>
        {/* <FontAwesomeIcon icon="fa-regular fa-location-dot" /> */}
        Address: {brewery.street}, {brewery.city}, {brewery.state}
      </div>
    </>
  );
};

export default BreweryPopup;
