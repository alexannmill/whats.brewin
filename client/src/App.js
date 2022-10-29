// ----- React and Utility Libs -----
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
import BreweryProfile from "./components/BreweryProfile";
import SearchBar from "./components/SearchBar";
// ----- Components -----
import MapComponent from "./components/MapComponent";
import { useEffect, useState } from "react";

//
// ----- App Component -----
//
export default function App() {
  //getting geolocation andsetting state to location
  const geolocation = navigator.geolocation.getCurrentPosition((pos) => {
    console.log("pos.coords.latitude:", pos.coords.latitude);
    console.log("pos.coords.longitude:", pos.coords.longitude);
  });

  const [city, setCity] = useState(geolocation);

  return (
    <div className="App">
      <div>
        <h1>What's Brewin'</h1>
        <BreweryProfile breweryName="barrel-brothers-brewing-company" />
        {/* <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers> */}
        {/* <MapComponent /> */}
        <BreweryProfile breweryName="barrel-and-beam-marquette" />
        <SearchBar defaultLocation={geolocation} />
      </div>
    </div>
  );
}
