import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className=" rounded-3xl ml-9 shadow-black shadow-md  bg-[#00000056] p-5	">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
