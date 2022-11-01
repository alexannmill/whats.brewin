// ----- React and Utility Libs -----
import { useEffect, useState, useContext } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Contexts -----
import BreweriesProvider from "../Contexts/BreweriesContext";
// ----- Components -----
import MapComponent from "./MapComponent";
import BreweryProfile from "./BreweryProfile";
import FormUsers from "./users/FormUsers";
import LikeButton from "./LikeButton";
import CityProvider from "../Contexts/CityContext";
import Hero from "../components/Hero/Hero"

//
// ----- App Component -----
//
export default function App() {
  
  return (
    <div className="App">
        <CityProvider>
          <BreweriesProvider>
            <Hero />
            {/* <MapComponent /> */}
            {/* <BreweryProfile breweryName="barrel-and-beam-marquette" /> */}
          </BreweriesProvider>
        </CityProvider>
          {/* <LikeButton /> */}
    </div>
  );
}
