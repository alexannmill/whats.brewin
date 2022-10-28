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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
