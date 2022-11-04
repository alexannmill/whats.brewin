import React, { useContext } from "react";
import { breweriesContext } from "../../Contexts/BreweriesContext";
import "./BreweryList.css";
import BreweryPopup from "../BreweryPopup";
import LikeButton from "../LikeButton";
import { LoginContext } from "../../Contexts/LoginContext";
import { motion } from "framer-motion"

const BrewerieList = () => {
  const { breweries } = useContext(breweriesContext);
  const { user, showUser } = useContext(LoginContext);
  const userBreweries = user.favoritedBreweries;
  if (user) {
  }
  const breweryList = breweries.map((b) => {
    let isFav;
    if (showUser) {
      isFav = userBreweries.find((e) => e.id == b.id);
    }

    return (
      <div className="  bg-neutral-50 m-5 p-0  rounded-xl opacity-95 max-w-lg hover:opacity-100">
        <BreweryPopup popupInfo={b} />{" "}
        {showUser && <LikeButton isFav={isFav} brewery={b} />}
      </div>
    );
  });

  return (
    <motion.div className="bList flex flex-wrap justify-center"
    initial={{translateY: "100%"}}
    animate={{translateY: "0%"}}
    exit={{translateY: "-100%", transition: {ease: "linear", duration: 0.125}}}
    >
      {breweryList}
    </motion.div>
  );
};

export default BrewerieList;
