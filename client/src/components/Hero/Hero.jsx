import React, { useState } from "react";
import MapComponent from "../MapComponent";
import SearchBar from "../SearchBar";
import "./Hero.css";

const Hero = () => {
  const geolocation = navigator.geolocation.getCurrentPosition((pos) => {
    console.log("pos.coords.latitude:", pos.coords.latitude);
    console.log("pos.coords.longitude:", pos.coords.longitude);
  });

  const [city, setCity] = useState(geolocation);

  return (
    <div className="Hero">
      <SearchBar defaultLocation={geolocation} />
    </div>
  );
};

export default Hero;
