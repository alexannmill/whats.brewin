// ----- React and Utility Libs -----
import "../App.css";
import { useEffect, useState } from "react";
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
  //getting geolocation and setting state to location
  const geolocation = navigator.geolocation.getCurrentPosition((pos) => {
    console.log("pos.coords.latitude:", pos.coords.latitude);
    console.log("pos.coords.longitude:", pos.coords.longitude);
  });

  const [city, setCity] = useState(geolocation);

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
