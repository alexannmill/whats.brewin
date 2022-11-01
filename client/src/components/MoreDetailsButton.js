// ----- React and Utils -----
import React from "react";
// ----- Components -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const MoreDetailsButton = () => {
  return (
    <button className="brewery-detail group">
      <FontAwesomeIcon
        icon={faBookOpen}
        className="detail-icons group-hover:text-[#2193b0]"
      />
      <p className="brewery-detail-text">View More Details</p>
    </button>
  );
};

export default MoreDetailsButton;
