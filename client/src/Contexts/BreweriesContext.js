import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const breweriesContext = createContext();

export default function BreweriesProvider(props) {
  // We will request the array of breweries and set it to be available app wide in here
  const [breweries, setBreweries] = useState([]);
  // Will eventually make a request using the CitiesContext that Alex makes
  useEffect(() => {
    axios
      .get(
        "https://api.openbrewerydb.org/breweries?by_city=seattle&per_page=50"
      )
      .then((res) => {
        // console.log("brewery array: ", res.data);
        setBreweries(() => res.data);
      })
      .catch((e) => {
        console.log("Error during Axios req: ", e);
      });
  }, []);

  const providerValues = { breweries, setBreweries };

  return (
    <breweriesContext.Provider value={providerValues}>
      {props.children}
    </breweriesContext.Provider>
  );
}
