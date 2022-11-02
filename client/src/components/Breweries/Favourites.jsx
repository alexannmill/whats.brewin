import React, { useContext } from "react";
import "./BreweryList.css";
import BreweryPopup from "../BreweryPopup";
import LikeButton from "../LikeButton";
import { LoginContext } from "../../Contexts/LoginContext";

const Favourites = () => {
  const { user } = useContext(LoginContext);
  const breweries = user.favoritedBreweries;
  const breweryList = breweries.map((b) => {
    return (
      <div className="  bg-neutral-50 m-5 p-0  rounded-xl opacity-95 max-w-lg hover:opacity-100">
        <BreweryPopup popupInfo={b} /> <LikeButton isFav={true} brewery={b} />
      </div>
    );
  });

  return (
    <div className="bList flex flex-wrap justify-center">{breweryList}</div>
  );
};

export default Favourites;
