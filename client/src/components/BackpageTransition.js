import React from "react";
import Logo from "./nav & footer/imgs/Logo.png";

function BackpageTransition() {
  return (
      <div className="fixed -z-50 w-screen h-screen bg-[#1B252E] ">
        <img
          src={Logo}
          alt="loading backpage"
          className="fixed w-96 h-96 top-1/2 left-1/2 -mt-48 -ml-48"
        />
      </div>
  );
}

export default BackpageTransition;
