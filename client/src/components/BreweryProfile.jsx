import { useEffect, useState } from "react";
import axios from "axios";

// //props breweryName
export default function BreweryProfile(props) {


  const [brewery, setBrewery] = useState(props.breweryName);


  // Find breweries for map by brewery
  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries/search?query=${props.breweryName}`
      )
      .then((res) => {
        console.log('res:', res)
        const incomingData = res.data[0]
        setBrewery({
            name: incomingData.name,
            street: incomingData.street,
            brewery_type: incomingData.brewery_type,
            state: incomingData.state,
            country: incomingData.country,
            postal_code: incomingData.postal_code,
            phone: incomingData.phone,
            website_url: incomingData.website_url
          });
      });
  }, []);


  return (
    <div>
      <h1>hello brewery profile</h1>
     <h1>{brewery.name}</h1>
     <h1>{brewery.street}</h1>
     <h1>{brewery.brewery_type}</h1>
     <h1>{brewery.state}</h1>
     <h1>{brewery.country}</h1>
     <h1>{brewery.postal_code}</h1>
     <h1>{brewery.website}</h1>
     <h1>{brewery.phone}</h1>
    </div>
  );
}