import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";
import LogOut from "../users/LogOut";
import Logo from "./imgs/logo3.png";
const Navbar = () => {
  const { user, showUser } = useContext(LoginContext);

  return (
    <nav className="flex space-x-32 space-y-4">
      <img src={Logo} alt="Logo" className="h-14" />
      <Link to="/">Whats brewin</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {showUser && <>{user.username.length ? user.username : "Ducky loco"}</>}
      <LogOut />
    </nav>
  );
};

export default Navbar;
