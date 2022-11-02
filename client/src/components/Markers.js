// ----- React & Utils -----
import React, { useContext, useEffect, useState } from "react";
// ----- react-map-gl -----
import { Marker, Popup, useMap } from "react-map-gl";
// ----- Contexts -----
import { cityContext } from "../Contexts/CityContext";
import { LoginContext } from "../Contexts/LoginContext";
// ----- Components -----
import BreweryPopup from "./BreweryPopup";
import LikeButton from "./LikeButton";

//
// ----- Markers Component -----
//
const Markers = (props) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const { city } = useContext(cityContext);
  const { current: map } = useMap();
  const { showUser, user } = useContext(LoginContext);

  useEffect(() => {
    map.flyTo({
      center: [city.long, city.lat],
      duration: 3000,
    });
  }, [map, city]);

  const handleClick = (event, brewery) => {
    event.originalEvent.stopPropagation();
    // center takes [long, lat]
    setPopupInfo(brewery);
    map.flyTo({
      center: [brewery.longitude, brewery.latitude],
      duration: 1500,
    });
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
          style={{ minWidth: "400px" }}
          maxWidth={"1000px"}
          closeButton={false}
          className={"my-popup"}
          focusAfterOpen={false}
        >
          {console.log("info", popupInfo)}
          <BreweryPopup popupInfo={popupInfo} />
          {showUser && (
            <LikeButton
              isFav={user.favoritedBreweries.find((e) => e.id === popupInfo.id)}
              brewery={popupInfo}
            />
          )}
        </Popup>
      )}
    </>
  );
};

export default Markers;
