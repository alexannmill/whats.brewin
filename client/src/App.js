import "./App.css";
// For react-map-gl
import "mapbox-gl/dist/mapbox-gl.css";
import BreweryProfile from "./components/BreweryProfile";
import SearchBar from "./components/SearchBar";
import FormUsers from "./components/users/FormUsers";
import MapComponent from "./components/MapComponent";
import { useEffect, useState } from "react";

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
        <h1>Whats brewin</h1>
        {/* <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers> */}
        {/* <MapComponent /> */}
        <BreweryProfile breweryName="barrel-and-beam-marquette" />
        <SearchBar defaultLocation={geolocation} />
      </div>
    </div>
  );
}
