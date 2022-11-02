import React, { useState } from "react";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const LikeButton = (props) => {
  const [like, setLike] = useState(false);
  const { user, setUser } = useContext(LoginContext);

  const onFavorite = (b) => {
    if (!user) {
      useNavigate("/register");
    }
    const newUser = {
      ...user,
      favoritedBreweries: [...user.favoritedBreweries, b],
    };
    setUser(newUser);
    console.log(user);
  };

  return (
    <button
      className="brewery-detail group"
      onClick={(e) => onFavorite(props.brewery)}
    >
      {like === true && (
        <FontAwesomeIcon
          icon={faBeerMugEmpty}
          className="text-[#FF8001] h-6 group-hover:text-[#2193b0]"
        />
      )}

      {like === false && (
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
