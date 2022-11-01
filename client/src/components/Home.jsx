// ----- React and Utility Libs -----
import { useEffect, useState } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Contexts -----
import BreweriesProvider from "../Contexts/BreweriesContext";
// ----- Components -----
import MapComponent from "./MapComponent";
import BreweryProfile from "./BreweryProfile";
import SearchBar from "./SearchBar";
import FormUsers from "./users/FormUsers";
import LikeButton from "./LikeButton";
import Hero from "./Hero/Hero";

//
// ----- App Component -----
//
export default function App() {
  //getting geolocation and setting state to location

  return (
    <div className="App">
      <BreweriesProvider>
        <Hero />
        <MapComponent />
      </BreweriesProvider>
    </div>
  );
}
