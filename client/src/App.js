import "./App.css";
// For react-map-gl
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import axios from "axios";

function App() {
  axios
    .get(
      "https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=50"
    )
    .then((res) => {
      console.log("res.data:", res.data);
    });
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
      </div>
    </div>
  );
}

export default App;
