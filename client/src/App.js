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
import { useTransition, animated } from "react-spring";
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
  console.log(location)

  // useTransitions take 3 params
  // 1. the items you want to iterate over (in this case our locations)
  // 2. a function that tells this transition what the KEY of each items should be, in this case the pathnames of our locations
  // 3. a config object that defines each stages of the transition
  const [transitions, api] = useTransition(location, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));

  // Next animate the routes, mapping each transitions
  // .map() takes CB receiving an OBJECT with items we want to iterate over
  // alias this to the location, as well as status properties that we receive from the animation
  // and the key for each of these items (the pathnames)
  // next, return an <animated.div> that understands the css properties / styles received from animations (from, enter, leave)
  // set the <animation.div style={props} and key={key}>
  // and lastly the <Routes / <Switch  location={location}>

  return (
    <CityProvider>
      <BreweriesProvider>
        <LoginContext.Provider
          value={{ user, setUser, showUser, setShowUser }}
        >
          <Navbar />
          {transitions((style, item) => (
            <animated.div style={style} >


                    <Routes location={item}>
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
                      <Route path="/react_spring" element={<ReactSpringExperiment/>} />
                      <Route path="/maps" element={<MapComponent />} />
                      <Route path="/brewery_list" element={<BreweryList />} />
                      <Route path="/favorites_list" element={<Favourites />} />
                      <Route path="/brewery/:brewery_id" element={<BreweryProfile />} />
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
