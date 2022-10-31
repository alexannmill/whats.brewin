// ----- React & Utils -----
import React, { useState } from "react";
// ----- react-map-gl -----
import { Marker, Popup, useMap } from "react-map-gl";
// ----- Components -----
import BreweryPopup from "./BreweryPopup";

//
// ----- Markers Component -----
//
const Markers = (props) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const { current: map } = useMap();


  const handleClick = (event, brewery) => {
    event.originalEvent.stopPropagation();
    // center takes [long, lat]
    map.flyTo({
      center: [brewery.longitude, brewery.latitude],
      duration: 1500,
    });

    setPopupInfo(brewery);
  };

  const renderMarker = props.breweries.map((brewery) => {
    return (
      <Marker
        key={brewery.id}
        longitude={brewery.longitude}
        latitude={brewery.latitude}
        anchor="bottom"
        onClick={(e) => handleClick(e, brewery)}
      >
        <img
          src="https://img.icons8.com/fluency/344/beer.png"
          alt="Beer Icon"
          width={35}
          height={40}
          className="hover:animate-bounce"
        />

      </Marker>
    );
  });

  return (
    <>
      {renderMarker}

      {popupInfo && (
        <Popup
          offset={35}
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          anchor={"bottom"}
          onClose={() => setPopupInfo(null)}
          style={{minWidth:"400px"}}
          maxWidth={"1000px"}
          closeButton={false}
          className={"my-popup"}
          focusAfterOpen={false}
        >
          <BreweryPopup popupInfo={popupInfo}/>
        </Popup>
      )}
    </>
  );
};

export default Markers;
