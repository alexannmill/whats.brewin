import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

//props breweryName
export default function BreweryProfile() {

  const [brewery, setBrewery] = useState("");

  //Find breweries for map by brewery
  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries/madtree-brewing-cincinnati`
      )
      .then((res) => {
        setBrewery({
            name: res.data.name,
            street: res.data.street,
            brewery_type: res.data.brewery_type,
            state: res.data.state,
            country: res.data.country,
            postal_code: res.data.postal_code,
            phone: res.data.phone,
            website_url: res.data.website_url
          });
      });
  });


  return (
    <div>
      <h1>{brewery.name}</h1>
      <h1>{brewery.street}</h1>
      <h1>{brewery.brewery_type}</h1>
      <h1>{brewery.state}</h1>
      <h1>{brewery.country}</h1>
      <h1>{brewery.postal_code}</h1>
      <h1>{brewery.phone}</h1>
      <h1>{brewery.website}</h1>
    </div>
  );
}