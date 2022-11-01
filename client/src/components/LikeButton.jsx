import React, { useState } from "react";
// ----- Components -----
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

const LikeButton = (props) => {
  
  const [like, setLike] = useState(false)


  return (
    <button 
      className="brewery-detail group" 
    >
      {like === true && 
      <FontAwesomeIcon icon={faBeerMugEmpty} 
        className="text-[#FF8001] h-6 group-hover:text-[#2193b0]" 
      />}


      {like === false && 
      <FontAwesomeIcon icon={faBeerMugEmpty} 
        className="like-icons-default group-hover:text-[#2193b0]" 
      />}

      <p className="brewery-detail-text">Favorite</p>

    </button>
  );
};

export default LikeButton;
