import { useEffect, useState } from "react";
// For react-map-gl
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

    
function errorLocation(err) {
  alert("Please turn on: Enable/Allow location" );
  console.log(err);
}

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 14,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const result = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 14
      }
      console.log(result)
      setViewState(() => ({...result}))
    }, errorLocation, { enableHighAccuracy: true })




  }, []);

  return (
    <div>
      <Map
        // Prevents re-mounting map each time
        reuseMaps="true"
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 1400, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default MapComponent;
