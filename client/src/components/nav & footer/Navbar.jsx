import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";
import LogOut from "../users/LogOut";
import Logo from "./imgs/logo3.png";

const Navbar = () => {
  const { user, showUser } = useContext(LoginContext);

  return (
    <nav className="flex space-x-32 space-y-4 bg-[#1B252E] shadow-black shadow-2xl">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {showUser ? (
          <>
            <img src={Logo} alt="Logo" className="h-14" />
            <div className="flex ">
              <p className="mt-5 text-neutral-50">
                {user.username ? user.username : "Ducky loco"}
              </p>
              <LogOut />
            </div>
          </>
        ) : (
          <>
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-14" />
            </Link>
            <div>
              <Link
                to="/register"
                className="m-10 text-white hover:bg-[#e8b476] rounded-3xl p-3"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-white  hover:bg-[#e8b476] rounded-3xl p-3"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
