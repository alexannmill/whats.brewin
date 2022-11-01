import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { cityContext } from "./CityContext";

export const breweriesContext = createContext();

export default function BreweriesProvider(props) {
  // We will request the array of breweries and set it to be available app wide in here
  const [breweries, setBreweries] = useState([]);
  // Will eventually make a request using the CitiesContext that Alex makes
  const { city } = useContext(cityContext);

  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?by_city=${city.city}&per_page=50`
      )
      .then((res) => {
        // console.log("brewery array: ", res.data);
        setBreweries(() => res.data);
      })
      .catch((e) => {
        console.log("Error during Axios req: ", e);
      });
  }, [city]);

  const providerValues = { breweries, setBreweries };

  return (
    <breweriesContext.Provider value={providerValues}>
      {props.children}
    </breweriesContext.Provider>
  );
}
