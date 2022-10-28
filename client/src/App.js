import "./App.css";
// For react-map-gl
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import FormUsers from "./components/users/FormUsers";

function App() {
  return (
    <div className="App">
      <div>
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
      </div>
    </div>
  );
}

export default App;
