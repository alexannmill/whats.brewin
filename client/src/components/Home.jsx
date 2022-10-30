import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
// ----- Components -----
import MapComponent from "./MapComponent";
// import FormUsers from "./components/users/FormUsers";
import BreweryProfile from "./BreweryProfile";
import LikeButton from "./LikeButton";

//
// ----- App Component -----
//
export default function Home() {
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
        <h1>What's Brewin'</h1>
        {/* <BreweryProfile breweryName="barrel-brothers-brewing-company" /> */}
        {/* <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers> */}
        {/* <MapComponent /> */}
        <LikeButton />
      </div>
    </div>
  );
}
