import { useState } from "react";
// For react-map-gl
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const MapComponent = () => {
  const [viewState, setViewState] = useState({
    latitude: 37.774929,
    longitude: -122.419416,
    zoom: 10,
    pitch: 25,
  });


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
