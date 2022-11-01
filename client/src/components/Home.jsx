// ----- React and Utility Libs -----
import { useEffect, useState } from "react";
import axios from "axios";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
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
      <div>
        <Hero />
        <MapComponent />
        <BreweryProfile breweryName="barrel-and-beam-marquette" />
        {/* <SearchBar defaultLocation={geolocation} />
        <LikeButton /> */}
      </div>
    </div>
  );
}
