import "./App.css";
// For react-map-gl
import "mapbox-gl/dist/mapbox-gl.css";
// import FormUsers from "./components/users/FormUsers";
import MapComponent from "./components/MapComponent";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Whats brewin</h1>
        {/* <FormUsers>Register</FormUsers>
        <FormUsers>Log in</FormUsers> */}
        <MapComponent />
      </div>
    </div>
  );
}
