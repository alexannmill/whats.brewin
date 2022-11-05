import axios from "axios";
import React, { useContext } from "react";
import BrewerProvider, { brewerContext } from "../../Contexts/BrewerContext";
import { LoginContext } from "../../Contexts/LoginContext";

const LogOut = () => {
  const { setUser, setShowUser, user } = useContext(LoginContext);
  const { brewer, setBrewer } = useContext(brewerContext);

  const logout = (e) => {
    e.preventDefault();
    axios.post("/favorites", user).then(() => {
      setShowUser(false);
      setUser({});
      setBrewer({});
    });
  };
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
