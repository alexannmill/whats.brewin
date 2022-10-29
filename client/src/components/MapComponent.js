// ----- React and Utils -----
import { useEffect, useState } from "react";
import axios from "axios";
// ----- For react-map-gl -----
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// Components
import Markers from "./Markers";


// 
// ----- Component -----
// 
const MapComponent = (props) => {
  const [viewState, setViewState] = useState({
    latitude: 37.774929,
    longitude: -122.419416,
    zoom: 10,
    pitch: 15,
  });

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.openbrewerydb.org/breweries?by_city=san_francisco&per_page=50"
      )
      .then((res) => {
        // console.log("brewery array: ", res.data);
        setBreweries(() => res.data)
      })
      .catch((e) => {
        console.log("Error during Axios req: ", e);
      });
  }, []);

  return (
    <div>
      <Map id="mainMap"
        // Prevents re-mounting map each time
        reuseMaps
        {...viewState}
        style={{ width: "fit", height: "100vh" }}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >

        <GeolocateControl />
        <Markers breweries={breweries}/>

      </Map>
    </div>
  );
};

export default MapComponent;
