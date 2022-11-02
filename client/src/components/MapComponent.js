// ----- React and Utils -----
import { useState, useContext } from "react";
// ----- For react-map-gl -----
import Map, { GeolocateControl, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Contexts -----
import { breweriesContext } from "../Contexts/BreweriesContext";
import { cityContext } from "../Contexts/CityContext";
// ----- Components -----
import Markers from "./Markers";

//
// ----- Component -----
//
const MapComponent = () => {
  const { city } = useContext(cityContext);
  const { breweries } = useContext(breweriesContext);

  const [viewState, setViewState] = useState({
    latitude: city.lat,
    longitude: city.long,
    zoom: 12,
    pitch: 10,
  });

  return (
    <div className="w-full">
      <Map
        id="mainMap"
        // Prevents re-mounting map each time
        reuseMaps
        {...viewState}
        style={{ width: "fit", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(e) => setViewState(e.viewState)}
      >
        <GeolocateControl />
        <NavigationControl />
        <Markers breweries={breweries} />
      </Map>
    </div>
  );
};

export default MapComponent;
