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
import { NavLink } from "react-router-dom";
import BrewerieList from "./Breweries/BreweryList";
import Favourites from "./Breweries/Favourites";
// ----- Framer Motion -----
import { motion } from "framer-motion"


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
    <motion.div className="w-2/3"
    initial={{translateY: "100%"}}
    animate={{translateY: "0%", transition: {ease:"easeInOut", duration: 0.5}}}
    exit={{translateY: "-200%", transition: {ease: "easeInOut", duration: 0.75}}}
    >
      <Map
        id="mainMap"
        // Prevents re-mounting map each time
        reuseMaps
        {...viewState}
        style={{ width: "fit", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(e) => setViewState(e.viewState)}
        scrollZoom={false}
      >
        <GeolocateControl />
        <NavigationControl />
        <Markers breweries={breweries} />
      </Map>
      <NavLink to={"/brewery_list"} element={<BrewerieList />}><button>Go to all list</button></NavLink>
      <NavLink to={"/favorites_list"} element={<Favourites />}><button>Go to favorites</button></NavLink>
    </motion.div>
  );
};

export default MapComponent;
