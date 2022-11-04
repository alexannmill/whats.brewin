import "./App.css";
// ----- React, Utils -----
import React, { useState } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- Contexts -----
import { LoginContext } from "./Contexts/LoginContext";
import BreweriesProvider from "./Contexts/BreweriesContext";
import CityProvider from "./Contexts/CityContext";
// ----- Components -----

import Footer from "./components/nav & footer/Footer";
import Navbar from "./components/nav & footer/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import BackpageTransition from "./components/BackpageTransition";
import Logo from "./components/nav & footer/imgs/Logo.png"

const App = () => {
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Router>
      <BackpageTransition />
      <CityProvider>
        <BreweriesProvider>
          <LoginContext.Provider
            value={{ user, setUser, showUser, setShowUser }}
          >
            <Navbar />
              <AnimatedRoutes />
            <Footer />
          </LoginContext.Provider>
        </BreweriesProvider>
      </CityProvider>
    </Router>
  );
};

export default App;
