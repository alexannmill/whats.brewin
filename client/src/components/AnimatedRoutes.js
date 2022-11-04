// React & Utils
import { useContext } from "react";
// react-router-dom
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// framer-motion
// import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { AnimatePresence } from "framer-motion"
// Contexts
import { LoginContext } from "../Contexts/LoginContext";
// Components
import BreweryProfile from "./Brewery-Profile/BreweryProfile";
import MapComponent from "./MapComponent";
import BreweryList from "./Breweries/BreweryList";
import Favourites from "./Breweries/Favourites";
import Home from "./Home";
import FormUsers from "./users/FormUsers";

export default function AnimatedRoutes() {
  const { showUser } = useContext(LoginContext);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {!showUser && (
          <>
            <Route path="/register" element={<FormUsers>Register</FormUsers>} />
            <Route path="/login" element={<FormUsers>Login</FormUsers>} />{" "}
          </>
        )}
        {showUser && <Route path="/favourites" element={<Favourites />} />}
        <Route path="/maps" element={<MapComponent />} />
        <Route path="/brewery_list" element={<BreweryList />} />
        <Route path="/favorites_list" element={<Favourites />} />
        <Route path="/brewery/:brewery_id" element={<BreweryProfile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}