import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../users/LogOut";
import Logo from "./imgs/logo3.png";
const Navbar = () => {
  return (
    <nav className="flex space-x-32 space-y-4">
      <img src={Logo} alt="Logo" className="h-14" />
      <Link to="/">Whats brewin</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

      <LogOut />
    </nav>
  );
};

export default Navbar;
