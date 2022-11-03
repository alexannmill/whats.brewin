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
      <div className=" shadow-orange-50 shadow-md  bg-neutral-50 m-5 p-0  rounded-xl opacity-95 max-w-lg hover:opacity-100">
        <BreweryPopup popupInfo={b} /> <LikeButton isFav={true} brewery={b} />
      </div>
    );
  });

  return (
    <div className="bList ">
      <h3 className="text-3xl font-sans font-bold text-center text-black-50 mt-3 tracking-wide shadow-black shadow-md  bg-neutral-50  p-10  rounded-3xl opacity-95 ">
        My Favourites
      </h3>
      <div className=" flex flex-wrap justify-center ">{breweryList}</div>
    </div>
  );
};

export default Favourites;
