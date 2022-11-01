import { useEffect, useState } from "react";
import axios from "axios";
import "./BreweryProfile.css"
// //props breweryName
export default function BreweryProfile(props) {


  const [brewery, setBrewery] = useState(props.breweryName);


  // Find breweries for map by brewery
  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries/${props.breweryName}`
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
  }, []);


  return (
    <div class="page">
      <div className="left-side">
        <div className="brewery-image">
          <img className="brewery-img" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3-k5ByhkB6qNRbtACIK2YdY5JydpQJ35bTVNoaSptQ&s" alt="Brewery Img"></img>
        </div>
        <div className="info-container">
          <div>
            <div className="brewery-address">
              <h1>{brewery.street}</h1>
              <h1>{brewery.state}</h1>
              <h1>{brewery.country}</h1>
              <h1>{brewery.postal_code}</h1>
            </div>
            <div className="brewery-contact">
              <h1>{brewery.website}</h1>
              <h1>{brewery.phone}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="brewery-title">
          <h1 className="brewery-title">{brewery.name}</h1>
        </div>
        <div className="brewery-type">
          <h1>{brewery.brewery_type}</h1>
        </div>
      </div>
    </div>
  );
}