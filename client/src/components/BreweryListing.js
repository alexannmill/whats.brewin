import React from "react";
import "./sidebar.css"

function BreweryListing(props) {
  const b = props.brewery
  return (
    <div className="listing-item">
      <h3>{b.name}</h3>
      <p>{b.street}, {b.city}, {b.state}</p>
    </div>
  );
}

export default BreweryListing;
