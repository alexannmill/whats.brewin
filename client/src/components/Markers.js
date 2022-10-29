// ----- React & Utils -----
import React, { Fragment, useState } from "react";
// ----- react-map-gl -----
import { Marker, Popup, useMap } from "react-map-gl";
// ----- Components -----
import Popups from "./Popups";


//
// ----- Markers Component -----
//
const Markers = (props) => {
  const [selectedBrewery, setSelectedBrewery] = useState(null);
  const { current: map } = useMap();

  const handleClick = (brewery) => {
    // center takes [long, lat]
    map.flyTo({
      center: [brewery.longitude, brewery.latitude],
      duration: 1500,
    });

    setSelectedBrewery(brewery);
  };

  const renderMarker = props.breweries.map((brewery) => {
    return (
      <Marker
        key={brewery.id}
        longitude={brewery.longitude}
        latitude={brewery.latitude}
        anchor="bottom"
        onClick={() => handleClick(brewery)}
      >
        <img
          src="https://img.icons8.com/fluency/344/beer.png"
          alt="Beer Icon"
          width={40}
          height={36}
        />
      </Marker>
    );
  });

  return (
    <Fragment>
      {renderMarker}
      {selectedBrewery && <Popups selectedBrewery={selectedBrewery} />}
    </Fragment>
  );
};

export default Markers;
