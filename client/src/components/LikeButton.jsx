import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

const LikeButton = () => {
  
  const [like, setLike] = useState(true)

  const switchLikeStatus = () => {
    if (like === true) {
      setLike(false)
    } else {
      setLike(true)
    }
  }

  return (
    <div>
      <button 
      onClick={(e) => switchLikeStatus()}
      >
      {like === true && <FontAwesomeIcon icon={faBeerMugEmpty} className="text-[#ef4444]" />}
      {like === false && <div className="LikeButtonFalse"><FontAwesomeIcon icon={faBeerMugEmpty} /></div>}
      </button>
    </div>
  );
};

export default LikeButton;
