import axios from "axios";
import React from "react";
const logout = (e) => {
  e.preventDefault();
  axios.post("/users/logout").then((data) => console.log("this works", data));
};
const LogOut = () => {
  return <button onClick={(e) => logout(e)}>Log out</button>;
};

export default LogOut;
