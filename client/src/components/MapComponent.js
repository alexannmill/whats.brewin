import { useEffect, useState } from "react";
// For react-map-gl
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    latitude: 37.774929,
    longitude: -122.419416,
    zoom: 10,
    pitch: 25,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.openbrewerydb.org/breweries?by_city=san_francisco&per_page=3"
      )
      .then((res) => {
        console.log("brewery array: ", res.data);
        const breweriesArray = res.data;
      })
      .catch((e) => {
        console.log("Error during Axios req: ", e);
      });
  }, []);

  return (
    <div>
      <Map
        // Prevents re-mounting map each time
        reuseMaps
        {...viewState}
        style={{ width: "fit", height: "100vh" }}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl />
      </Map>
    </div>
  );
};

export default MapComponent;
