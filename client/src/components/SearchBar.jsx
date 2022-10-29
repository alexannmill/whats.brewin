import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";


// //props breweryName
export default function SearchBar(props) {



  const [city, setCity] = useState()
  const [select, setSelect] = useState([])
  const [search, setSearch] = useState("")
  
  // input - onChange axios for drop down
  // Find breweries for dropdown
  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries/autocomplete?query=${city}`
      )
      .then((res) => {
        console.log('res:', res)
        const incomingData = res.data.map((opt) => {
          
          return {label:opt.name, value:opt.name}
        })
        console.log('incomingData:', incomingData)
        setSelect(incomingData)
      });
    }, []);


  //handler for search bar input set search and suggestions 
    const searchBarHandler = (e) => {
      setSelect(e.target.value)
      setSearch(e.target.value)
    }

  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) =>searchBarHandler(e)}
          onSubmit={(e) => setCity(e.target.value)}
        ></input>
        <Select
        options={select}
        />
      </form>
    </div>
  );
}