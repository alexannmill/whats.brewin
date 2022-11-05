import { useState, createContext } from "react";

export const oneBreweryContext = createContext();

function OneBreweryProvider(props) {

  const [brewery, setBrewery] = useState(null);

  const breweryData = { brewery, setBrewery };
  return (
    <oneBreweryContext.Provider value={breweryData}>
      {props.children}
    </oneBreweryContext.Provider>
  );
}

export default OneBreweryProvider