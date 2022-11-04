import React, { useState } from "react";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import Confirm from "./Confirm";

const LikeButton = (props) => {
  const { user, setUser } = useContext(LoginContext);
  const [confirm, setConfirm] = useState(false);

  const deleteFav = (b) => {
    const newList = user.favoritedBreweries.filter((brew) => b.id !== brew.id);
    const newUser = {
      ...user,
      favoritedBreweries: [...newList],
    };
    setConfirm(false);
    return setUser(newUser);
  };

  const onFavorite = (b) => {
    if (!user.favoritedBreweries.find((e) => e.id === b.id)) {
      const newUser = {
        ...user,
        favoritedBreweries: [...user.favoritedBreweries, b],
      };
      return setUser(newUser);
    }
    setConfirm(true);
  };

  return (
    <>
      {confirm ? (
        <Confirm setC={setConfirm} onConfirm={() => deleteFav(props.brewery)} />
      ) : (
        <button
          className="brewery-detail group"
          onClick={(e) => onFavorite(props.brewery)}
        >
          {props.isFav && (
            <FontAwesomeIcon
              icon={faBeerMugEmpty}
              className="text-[#FF8001] h-6 "
            />
          )}

          {!props.isFav && (
            <FontAwesomeIcon
              icon={faBeerMugEmpty}
              className="like-icons-default group-hover:text-[#2193b0]"
            />
          )}

          <p className="brewery-detail-text">Favorite</p>
        </button>
      )}
    </>
  );
};

export default LikeButton;
