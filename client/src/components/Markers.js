// ----- React & Utils -----
import React, { useContext, useEffect, useState } from "react";
// ----- react-map-gl -----
import { Marker, Popup, useMap } from "react-map-gl";
// ----- Contexts -----
import { cityContext } from "../Contexts/CityContext";
import { LoginContext } from "../Contexts/LoginContext";
import { oneBreweryContext } from "../Contexts/OneBreweryContext";
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
  const { brewery } = useContext(oneBreweryContext);

  // Sets local popupInfo state to whatever singular brewery (either from Context or Local scope)
  const openPopup = (brewery) => {
    // center takes [long, lat]
    setPopupInfo(brewery);
    map.flyTo({
      center: [brewery.longitude, brewery.latitude],
      duration: 1500,
      zoom: 13
    });
  }

  // Handling clicking on Marker directly on map (Not from sidebar)
  const handleClick = (event, brewery) => {
    event.originalEvent.stopPropagation();
    openPopup(brewery);
  };


  // For Flying ciy to city, either on init or on city change from searchbar/context scope
  useEffect(() => {
    map.flyTo({
      center: [city.long, city.lat],
      duration: 3000,
    });
  }, [map, city]);

  // Purely for handling single brewery info coming in from context scope
  useEffect(() => {
    if (brewery) {
      openPopup(brewery);
    }
  }, [brewery]) // not sure why it's angry here but it works 



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
