import React, { Fragment } from "react";
import { Marker } from "react-map-gl";

const Markers = (props) => {


  const renderMarker = props.breweries.map((brewery) => {
    return (
      <Marker
        longitude={brewery.longitude}
        latitude={brewery.latitude}
        anchor="bottom"
      >
        <img src="https://img.icons8.com/fluency/344/beer.png" alt="Beer Icon" width={50} height={36}/>
      </Marker>
    );
  });

  return (
    <Fragment>
      {renderMarker}
    </Fragment>
  )
};

export default Markers;
