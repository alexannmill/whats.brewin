import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../users/LogOut";

const Navbar = () => {
  return (
    <nav className="flex space-x-32 space-y-4">
      <Link to="/">Whats brewin</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

      <LogOut />
    </nav>
  );
};

export default Navbar;
