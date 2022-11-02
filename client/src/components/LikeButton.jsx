import React, { useState } from "react";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const LikeButton = (props) => {
  const { user, setUser } = useContext(LoginContext);
  const [like, setLike] = useState(props.isFav);
  //
  const onFavorite = (b) => {
    console.log(user);
    // if (!user) {
    //   useNavigate("/register");
    // }
    if (!user.favoritedBreweries.find((e) => e.id == b.id)) {
      const newUser = {
        ...user,
        favoritedBreweries: [...user.favoritedBreweries, b],
      };
      setLike(true);
      return setUser(newUser);
    }

    const newList = user.favoritedBreweries.filter((brew) => b.id !== brew.id);
    const newUser = {
      ...user,
      favoritedBreweries: [...newList],
    };
    setLike(false);
    return setUser(newUser);
  };

  return (
    <button
      className="brewery-detail group"
      onClick={(e) => onFavorite(props.brewery)}
    >
      {like && (
        <FontAwesomeIcon
          icon={faBeerMugEmpty}
          className="text-[#FF8001] h-6 group-hover:text-[#2193b0]"
        />
      )}

      {!like && (
        <FontAwesomeIcon
          icon={faBeerMugEmpty}
          className="like-icons-default group-hover:text-[#2193b0]"
        />
      )}

      <p className="brewery-detail-text">Favorite</p>
    </button>
  );
};

export default LikeButton;
