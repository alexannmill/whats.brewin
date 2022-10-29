import { useEffect, useState } from "react";
import axios from "axios";

// //props breweryName
export default function BreweryProfile(props) {
  //fina
  const [city, setCity] = useState(props.defaultLocation);
  const [search, setSearch] = useState([]);
  
  // Find breweries for dropdown
  //input - onChange axios for drop down
  useEffect(() => {
    axios
    .get(
      `https://api.openbrewerydb.org/breweries/autocomplete?query=${search}`
      )
      .then((res) => {
        console.log('res:', res)
        const incomingData = res.data
        console.log('incomingData:', incomingData)
      });
    }, [search]);
    
    //onSubmit - query for single brewery

  return (
    <div>
      <form>
        <label>Search: </label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}  
        ></input>
      </form>
    </div>
  );
}