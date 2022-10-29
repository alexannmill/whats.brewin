import React from "react";

const BreweryPopup = (props) => {
  const brewery = props.popupInfo;

  // NOTE: We actually can put an image in here if we wanted to
  return (
    <div>
      <a href={`${brewery.website_url}`}>
        <h1>{brewery.name}</h1>
      </a>
      <h3>
        Address: {brewery.street}, {brewery.city}, {brewery.state}
      </h3>
    </div>
  );
};

export default BreweryPopup;