import React from "react";
import BrewerieList from "../Breweries/BreweryList";
import MapComponent from "../MapComponent";

const MapList = () => {
  return (
    <div>
      <MapComponent /> <BrewerieList />
    </div>
  );
};

export default MapList;
