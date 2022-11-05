import React from "react";
import "./sidebar.css";
// ----- react-map-gl -----
import { useMap } from "react-map-gl";

function BreweryListing(props) {
  const b = props.brewery;
  const { mainMap } = useMap();
  const handleClick = (e) => {
    mainMap.flyTo({
      center: [b.longitude, b.latitude],
      duration: 1500,
      zoom: 13,
    });
  };

  return (
    <div className="listing-item" onClick={(e) => handleClick(e)}>
      <h3>{b.name}</h3>
      <p>
        {b.street}, {b.city}, {b.state}
      </p>
    </div>
  );
}

export default BreweryListing;
