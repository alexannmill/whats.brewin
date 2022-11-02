import "./App.css";
// ----- React, Utils -----
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Contexts -----
import { LoginContext } from "./Contexts/LoginContext";
import BreweriesProvider from "./Contexts/BreweriesContext";
import CityProvider from "./Contexts/CityContext";
// ----- Components -----
import Home from "./components/Home";
import FormUsers from "./components/users/FormUsers";
import Footer from "./components/nav & footer/Footer";
import Navbar from "./components/nav & footer/Navbar";
import BreweryProfile from "./components/BreweryProfile";
import MapComponent from "./components/MapComponent";
import BreweryList from "./components/Breweries/BreweryList";
import Favourites from "./components/Breweries/Favourites";

const App = () => {
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Router>
      <CityProvider>
        <BreweriesProvider>
          <LoginContext.Provider
            value={{ user, setUser, showUser, setShowUser }}
          >
            <Navbar />
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
              <Route path="/breweryList" element={<BreweryList />} />

              <Route path="/brewery/:brewery_id" element={<BreweryProfile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </LoginContext.Provider>
        </BreweriesProvider>
      </CityProvider>
    </Router>
  );
};

export default App;
