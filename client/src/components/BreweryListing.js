import React from "react";
import "./sidebar.css";

function BreweryListing(props) {
  const b = props.brewery;

  // Purely responsible for just letting it's parent know that it has been clicked, so that its parent can set the brewery from context scope
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className="listing-item" onClick={() => handleClick()}>
      <h3>{b.name}</h3>
      <p>
        {b.street}, {b.city}, {b.state}
      </p>
    </div>
  );
}

export default BreweryListing;
