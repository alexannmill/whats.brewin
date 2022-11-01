// ----- React and Utility Libs -----
import { useEffect, useState, useContext } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Components -----
import MapComponent from "./MapComponent";
import BreweryProfile from "./BreweryProfile";
import SearchBar from "./SearchBar";
import FormUsers from "./users/FormUsers";
import LikeButton from "./LikeButton";

//
// ----- App Component -----
//
export default function App() {
  
  // const city = useCity()
  // const setCity = useSetCity()

  return (
    <div className="App">
      <div>
        <h1>What's Brewin'</h1>
        <MapComponent />
        <BreweryProfile breweryName="barrel-and-beam-marquette" />
        <SearchBar defaultLocation={geolocation} />
        <LikeButton />
      </div>
    </div>
  );
}
