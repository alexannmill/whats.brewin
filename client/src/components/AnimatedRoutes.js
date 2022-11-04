import { useContext } from "react";

import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";

import BreweryProfile from "./Brewery-Profile/BreweryProfile";
import MapComponent from "./MapComponent";
import BreweryList from "./Breweries/BreweryList";
import Favourites from "./Breweries/Favourites";
import Home from "./Home"
import FormUsers from "./users/FormUsers"


export default function AnimatedRoutes() {
  const {showUser} = useContext(LoginContext)

  return(
    <Routes>
    <Route path="/" element={<Home />} />
    {!showUser && (
      <>
        <Route
          path="/register"
          element={<FormUsers>Register</FormUsers>}
        />
        <Route path="/login" element={<FormUsers>Login</FormUsers>} />{" "}
      </>
    )}
    {showUser && (
      <Route path="/favourites" element={<Favourites />} />
    )}
    <Route path="/maps" element={<MapComponent />} />
    <Route path="/brewery_list" element={<BreweryList />} />
    <Route path="/favorites_list" element={<Favourites />} />
    <Route path="/brewery/:brewery_id" element={<BreweryProfile />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  )
}