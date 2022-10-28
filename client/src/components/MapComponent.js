import { useState } from "react";
// For react-map-gl
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  })
  return (
    <div>
      <Map
        // Prevents re-mounting map each time
        reuseMaps="true"
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: 1400, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default MapComponent;
