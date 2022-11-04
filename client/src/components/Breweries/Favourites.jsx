import React, { useContext } from "react";
import "./BreweryList.css";
import BreweryPopup from "../BreweryPopup";
import LikeButton from "../LikeButton";
import { LoginContext } from "../../Contexts/LoginContext";
import { motion } from "framer-motion"


const Favourites = () => {
  const { user } = useContext(LoginContext);
  const breweries = user.favoritedBreweries;
  const breweryList = breweries.map((b) => {
    return (
      <motion.div className="  bg-neutral-50 m-5 p-0  rounded-xl opacity-95 max-w-lg hover:opacity-100"
      initial={{opacity: 0.15 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0.5, transition: {duration: 0.15} }}
      >
        <BreweryPopup popupInfo={b} /> <LikeButton isFav={true} brewery={b} />
      </motion.div>
    );
  });

  return (
    <div className="bList flex flex-wrap justify-center">{breweryList}</div>
  );
};

export default Favourites;
