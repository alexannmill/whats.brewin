// ----- React and Utility Libs -----
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Components -----
import MapComponent from "./components/MapComponent";
// import FormUsers from "./components/users/FormUsers";
import BreweryProfile from "./components/BreweryProfile";


// 
// ----- App Component -----
// 
export default function App() {
  //getting geolocation
  const geolocation = navigator.geolocation.getCurrentPosition((pos) => {
    console.log("pos.coords.latitude:", pos.coords.latitude);
    console.log("pos.coords.longitude:", pos.coords.longitude);
  });

  //will need to be set to geolocation
  const [city, setCity] = useState(geolocation);

  //Find breweries for map by city
  // useEffect((city) => {
  //   axios
  //     .get(
  //       `https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`
  //     )
  //     .then((res) => {
  //       //breweries back in json
  //       const breweries = res.data;
  //     });
  // });

  return (
    <div className="App">
      <div>
        <h1>Whats brewin</h1>
        <BreweryProfile breweryName="barrel-brothers-brewing-company" />
        {/* <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers> */}
        <MapComponent />
      </div>
    </div>
  );
}
