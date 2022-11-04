import React from "react";

function BreweryListing(props) {
  const b = props.brewery
  return (
    <div className="sidebar-listings">
      <h3>{b.name}</h3>
      <p>{b.street}, {b.city}, {b.state}</p>
    </div>
  );
}

export default BreweryListing;
