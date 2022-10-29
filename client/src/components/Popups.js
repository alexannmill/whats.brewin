// ----- React && Utils -----
import React from "react";
// ----- react-map-gl -----
import { Popup } from "react-map-gl";

//
// ----- Popups Component -----
//
const Popups = (props) => {
  return (
    <Popup latitude={0} longitude={0}>
      <h1 style={{ height: "400px", width: "400px" }}>HELLLLLOOOOOO</h1>
    </Popup>
  );
};

export default Popups;
