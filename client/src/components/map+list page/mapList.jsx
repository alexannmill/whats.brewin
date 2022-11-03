import React from "react";
import BrewerieList from "../Breweries/BreweryList";
import MapComponent from "../MapComponent";

const MapList = () => {
  return (
    <div className="flex">
      <MapComponent /> <BrewerieList />
    </div>
  );
};

export default MapList;
