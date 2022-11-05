import React, { useContext } from "react";
import "./sidebar.css";
// ----- Contexts -----
import { cityContext } from "../Contexts/CityContext";
import { breweriesContext } from "../Contexts/BreweriesContext";
import BreweryListing from "./BreweryListing";
import { oneBreweryContext } from "../Contexts/OneBreweryContext";
// ----- Components -----

function MapSidebar(props) {
  const { city } = useContext(cityContext);
  const { breweries } = useContext(breweriesContext);
  const { setBrewery } = useContext(oneBreweryContext);

  const buildListings = breweries.map((b) => {
    return (
      // Click func here sets brewery in context-scope, and it's called by child comp
      <BreweryListing key={b.id} brewery={b} onClick={() => setBrewery(b)} /> 
    );
  });

  return (
    <div className="sidebar">
      <div className="heading">
        <h1>Breweries in {city.city}, {city.state} </h1>
      </div>
      <section className="listings">{buildListings}</section>
    </div>
  );
}

export default MapSidebar;
