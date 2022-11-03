import "./App.css";
// ----- React, Utils -----
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
// ----- react-map-gl -----
import "mapbox-gl/dist/mapbox-gl.css";
// ----- react-spring -----
import { useTransition, animated } from "@react-spring/web";
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
import ReactSpringExperiment from "./components/ReactSpringExperiment";

const App = () => {
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState({});

  //
  // For React Spring Transition
  //
  const location = useLocation(); // From react-router-dom, allows us to keep track of page changes
  console.log(location);

  // useTransitions take 3 params
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0%, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
  });


  return (
    <CityProvider>
      <BreweriesProvider>
        <LoginContext.Provider value={{ user, setUser, showUser, setShowUser }}>
          <Navbar />
          {transitions((style, item) => (
            <animated.div style={style}>
              <Routes location={item}>
                <Route path="/" element={<Home />} />
                {!showUser && (
                  <>
                    <Route
                      path="/register"
                      element={<FormUsers>Register</FormUsers>}
                    />
                    <Route
                      path="/login"
                      element={<FormUsers>Login</FormUsers>}
                    />{" "}
                  </>
                )}
                {showUser && (
                  <Route path="/favourites" element={<Favourites />} />
                )}
                <Route
                  path="/react_spring"
                  element={<ReactSpringExperiment />}
                />
                <Route path="/maps" element={<MapComponent />} />
                <Route path="/brewery_list" element={<BreweryList />} />
                <Route path="/favorites_list" element={<Favourites />} />
                <Route
                  path="/brewery/:brewery_id"
                  element={<BreweryProfile />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </animated.div>
          ))}

          <Footer />
        </LoginContext.Provider>
      </BreweriesProvider>
    </CityProvider>
  );
};

export default App;
