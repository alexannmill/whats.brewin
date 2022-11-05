import { createContext, useState } from "react";

export const brewerContext = createContext();

export default function BrewerProvider(props) {
  const [brewer, setBrewer] = useState({});

  const brewerData = { brewer, setBrewer };
  return (
    <brewerContext.Provider value={brewerData}>
      {props.children}
    </brewerContext.Provider>
  );
}
