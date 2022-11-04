import { useEffect, useState, useContext, useCallback  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ---- Datalikst Drop Down
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css'

// ---- Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faLocationCrosshairs,
  faXmark, 
} from "@fortawesome/free-solid-svg-icons"

// ---- Context
import { cityContext } from "../Contexts/CityContext";



export default function SearchBar(props) {

  const { city, setCity } = useContext(cityContext);

  const [search, setSearch] = useState([]);
  const [select, setSelect] = useState(city.city);
  
// ---- Clears search bar when going from map to home page.  
  useEffect(() => {
    if (props.nav) {
      setSelect(city.city)
    } else {
      setSelect("")
    }
  },[])


// ---- Input - onChange axios  to cities db for drop down
  useEffect(() => {
    // ---- For empty form
        if (select === "") return
    axios
      .get(`/cities/${select}`)
      .then((res) => {
    // --- Parse data from db search results
        const incomingData = res.data.map((opt, i) => {
          return {
            id:[i], 
            value:[`${opt.city}, ${opt.state}`],
            long: opt.long,
            lat: opt.lat,
            city: opt.city,
            state: opt.state,
          }
        })
        setSearch(incomingData);
      })
    }, [select]);
    
// ---- City object create for selected city to be sent to maps 
  const setCityContextWithClick = (e) => {
    const currentSearch = {...search};
    for (const c in currentSearch) {
      // ---- compare selected with db search results
      if (currentSearch[c].city === e[0] && 
      currentSearch[c].state === e[1]) {
        const cityObj = currentSearch[c]
        setCity(cityObj)
      }
    }
  }
  
// ---- React route manual redirect to avoid link tag
    const navigate = useNavigate();
    const redirect = useCallback(() => navigate('/maps', {replace: true}), [navigate])

// ---- Clear search search button, reset states 
  const clearButton = (e) => {
    e.preventDefault();
    setSelect("");
    setSearch([])
  }


    return (
      <div className="total-searchbar backdrop-contrast-250">
      {!props.nav && (
        <h1 className="text-neutral-50 text-8xl font-extrabold font-['Lobster']">
          See <span className="text-neutral-50">What's</span>{" "}
          <span className="text-neutral-50">Brewin'</span>
        </h1>
        
      )}
        <form className="search-with-buttons" >
            {/* <FontAwesomeIcon icon={faLocationCrosshairs} className="set-current"/> */}
            <DatalistInput className="Search-bar-input"
            label="See What's Brewin'"
            placeholder="Enter A City"
            showLabel={false}
            // ---- Filter search to only show 5 cities using cityObj value
            items={search.slice(0, 5)}
            value={select}
            onSelect={(item) => {
            //setting city with city, state instead of value
              redirect()
              setCityContextWithClick([item.city, item.state])}}
            // ---- Handler for search bar input set search and suggestions
            onChange={(e) => {
              e.preventDefault();
              setSelect(e.target.value);
            }} />
          <button onClick= {(e) => clearButton(e)} >
          <FontAwesomeIcon icon={faXmark} className="clear-search" />
        </button>
      </form>
    </div>
  );
}
