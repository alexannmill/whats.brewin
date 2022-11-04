import React, { useContext } from "react";
import "./sidebar.css";
// ----- Contexts -----
import { cityContext } from "../Contexts/CityContext";
import { breweriesContext } from "../Contexts/BreweriesContext";
import BreweryListing from "./BreweryListing";
// ----- Components -----

function MapSidebar() {
  const { city } = useContext(cityContext);
  const { breweries } = useContext(breweriesContext);

  const buildListings = breweries.map((b) => {
    return <BreweryListing key={b.id} brewery={b} />;
  });

  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <h1>Breweries in {city.city}</h1>
      </header>
      <section className="sidebar-container">{buildListings}</section>
    </div>
  );
}

export default MapSidebar;
