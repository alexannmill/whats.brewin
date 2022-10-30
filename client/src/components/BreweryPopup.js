import React from "react";

const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  // NOTE: We actually can put an image in here if we wanted to
  return (
    <>
      <a href={`${brewery.website_url}`} target="_blank" rel="noopener noreferrer">
        <h3>{brewery.name}</h3>
      </a>
      <p>
        Address: {brewery.street}, {brewery.city}, {brewery.state}
      </p>
    </>
  );
};

export default BreweryPopup;
