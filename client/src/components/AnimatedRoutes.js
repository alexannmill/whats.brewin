// React & Utils
import { useContext } from "react";
// react-router-dom
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// framer-motion
import { AnimatePresence } from "framer-motion";
// Contexts
import { LoginContext } from "../Contexts/LoginContext";
// Components
import BreweryProfile from "./Brewery-Profile/BreweryProfile";
import MapComponent from "./MapComponent";
import BreweryList from "./Breweries/BreweryList";
import Favourites from "./Breweries/Favourites";
import Home from "./Home";
import FormUsers from "./users/FormUsers";
import EditForm from "./Brewers/EditForm";
import BrewerHomepage from "./Brewers/BrewerHomepage";

export default function AnimatedRoutes() {
  const { showUser, user } = useContext(LoginContext);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {user.brewery ? (
          <>
            <Route path="/" element={<BrewerHomepage />} />
            <Route path="/brewers/home" element={<BrewerHomepage />} />
            <Route path="/brewers/edit" element={<EditForm />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        {!showUser && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<FormUsers>Register</FormUsers>} />
            <Route path="/login" element={<FormUsers>Login</FormUsers>} />{" "}
          </>
        )}
        {showUser && <Route path="/favourites" element={<Favourites />} />}
        <Route path="/maps" element={<MapComponent />} />
        <Route path="/brewery_list" element={<BreweryList />} />
        <Route path="/brewery/:brewery_id" element={<BreweryProfile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
