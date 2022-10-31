import { useEffect, useState } from "react";
import axios from "axios";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

// //props breweryName
export default function SearchBar(props) {

  const [city, setCity] = useState(props.geolocation)
  const [search, setSearch] = useState([])
  const [select, setSelect] = useState("")
  

  // ---- Input - onChange axios  to cities db for drop down
  useEffect(() => {
    axios
      .get(`/cities/${select}`)
      .then((res) => {
    // ---- For empty form
        if (select === "") return
    // --- Parse data from db
        const incomingData = res.data.map((opt, i) => {
          return {id:[i], value:[opt.city, `, ${opt.state}`]}
        })
        setSearch(incomingData)
      })
    }, [select]);
    
    
    return (
      <div>
        <DatalistInput 
          label="Search City"
    // ---- Filter search to only show 5 cities
          items={search.slice(0, 5)}
          value={select}
    // ---- Handler for search bar input set search and suggestions 
          onChange={(e) => {
            e.preventDefault()
            setSelect(e.target.value)}}
          onSelect={(e) => setCity(e.target.value)}
        />
    </div>
  );
}