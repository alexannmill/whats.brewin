import { createContext, useState } from "react";

export const cityContext = createContext();

export default function CityProvider(props) {
  const [city, setCity] = useState({});

  const cityData = { city, setCity };
  return (
    <cityContext.Provider value={cityData}>
      {props.children}
    </cityContext.Provider>
  );
}
