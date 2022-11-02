import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className=" rounded-3xl ml-9 shadow-black shadow-md  bg-[#00000056] p-5	">
        <SearchBar />
        <Link to="/breweryList">Brewwawwww</Link>
        <Link to="/favourites">FAVvvvvv</Link>
      </div>
    </div>
  );
};

export default Hero;
