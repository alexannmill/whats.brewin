import React, { useContext } from "react";
import { breweriesContext } from "../../Contexts/BreweriesContext";
import "./BreweryList.css";
import BreweryPopup from "../BreweryPopup";

const BrewerieList = () => {
  const { breweries } = useContext(breweriesContext);

  const breweryList = breweries.map((b) => {
    return (
      <div className="bg-neutral-50 m-5 p-10 rounded-3xl opacity-90 hover:opacity-100">
        <BreweryPopup popupInfo={b} />{" "}
      </div>
    );
  });

  return (
    <div className="bList flex flex-wrap justify-center">{breweryList}</div>
  );
};

export default BrewerieList;
