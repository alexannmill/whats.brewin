import "./App.css";
// For react-map-gl
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import FormUsers from "./components/users/FormUsers";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Whats brewin</h1>
        {/* <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        /> */}
        <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers>
      </div>
    </div>
  );
}
