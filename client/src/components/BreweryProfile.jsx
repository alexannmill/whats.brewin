import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";



// //props breweryName
export default function BreweryProfile() {
  const [brewery, setBrewery] = useState({});
  
  // From React Router
  let {brewery_id} = useParams();


  // Find breweries for map by brewery
  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries/${brewery_id}`
      )
      .then((res) => {
        console.log('res:', res)
        const incomingData = res.data
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
  }, [brewery_id]);


  return (
    <div>
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