import "./sidebar.css";
// ----- React and Utils -----
import { useState, useContext } from "react";
// ----- For react-map-gl -----
import Map, {
  GeolocateControl,
  NavigationControl,
  MapProvider,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Contexts -----
import { breweriesContext } from "../Contexts/BreweriesContext";
import { cityContext } from "../Contexts/CityContext";
// ----- Components -----
import Markers from "./Markers";
import { NavLink } from "react-router-dom";
import BrewerieList from "./Breweries/BreweryList";
import Favourites from "./Breweries/Favourites";
import MapSidebar from "./MapSidebar";
// ----- Framer Motion -----
import { motion } from "framer-motion";

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
    <>
      <motion.div
        className="flex flex-row flex-nowrap h-screen w-auto"
        initial={{ translateY: "100%" }}
        animate={{
          translateY: "0%",
          transition: { ease: "easeInOut", duration: 0.5 },
        }}
        exit={{
          translateY: "-200%",
          transition: { ease: "easeInOut", duration: 0.75 },
        }}
      >
        <MapProvider>
          <MapSidebar className="w-1/3 h-auto" />
          <Map
            id="mainMap"
            // Prevents re-mounting map each time
            reuseMaps
            {...viewState}
            className="w-2/3 h-auto"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onMove={(e) => setViewState(e.viewState)}
            scrollZoom={false}
          >
            <GeolocateControl />
            <NavigationControl />
            <Markers breweries={breweries} />
          </Map>
        </MapProvider>
      </motion.div>
      <button className="view-all-button">
        <NavLink to={"/brewery_list"} element={<BrewerieList />}>
          View All
        </NavLink>
      </button>
    </>
  );
};

export default MapComponent; 
