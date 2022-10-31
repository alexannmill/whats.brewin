// ----- React and Utility Libs -----
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Components -----
import MapComponent from "./components/MapComponent";
import BreweryProfile from "./components/BreweryProfile";
import SearchBar from "./components/SearchBar";
import FormUsers from "./components/users/FormUsers";
import LikeButton from "./components/LikeButton";

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
        {/* <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers> */}
        {/* <MapComponent /> */}
        <BreweryProfile breweryName="barrel-and-beam-marquette" />
        <SearchBar defaultLocation={geolocation} />
      </div>
    </div>
  );
}
