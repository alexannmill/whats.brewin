import axios from "axios";
import React from "react";
const logout = (e) => {
  e.preventDefault();
  axios.post("/users/logout").then((data) => console.log("bye"));
};
const LogOut = () => {
  return (
    <button
      className="bg-red-500 border-1 border-black rounded-full p-2 text-white hover:bg-red-700 m-3"
      onClick={(e) => logout(e)}
    >
      Log out
    </button>
  );
};

export default LogOut;
