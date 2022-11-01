import { useEffect, useState, useContext  } from "react";
import axios from "axios";

// ---- Datalikst Drop Down
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css'

// ---- Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faXmark, 
} from "@fortawesome/free-solid-svg-icons"

// ---- Context
import { cityContext } from "../Contexts/CityContext";
import { Link } from "react-router-dom";



export default function SearchBar(props) {

  const [search, setSearch] = useState([]);
  const [select, setSelect] = useState("");
 
  const {city, setCity} = useContext(cityContext);


// --- Getting geolocation 
  // const geolocation = navigator.geolocation.getCurrentPosition((pos) => {
  //   return {
  //     long: pos.coords.longitude,
  //     lat: pos.coords.latitude
  //   }
  // });

// ---- Input - onChange axios  to cities db for drop down
  useEffect(() => {
    axios
      .get(`/cities/${select}`)
      .then((res) => {
    // ---- For empty form
        if (select === "") return
    // --- Parse data from db
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
    
// ---- city object create for selected city to be sent to maps 
  const setCityContextWithClick = (e) => {
    const selectedCity = e
    const currentSearch = {...search};
    for (const c in currentSearch) {
      if (currentSearch[c].city === selectedCity[0] && 
      currentSearch[c].state === selectedCity[1]) {
        const cityObj = currentSearch[c]
        setCity(cityObj)
      }
    }
  }

// ---- clear search search button, reset states 
  const clearButton = (e) => {
    e.preventDefault();
    setSelect("");
    setSearch([])
    setCity({})
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
          <Link to={"/maps"}>
            <FontAwesomeIcon icon={faLocationCrosshairs} className="set-current"/>
          </Link>
            <DatalistInput 
              className="Search-bar-input"
              label="See What's Brewin'"
              placeholder="Enter A City"
              showLabel={false}
              // ---- Filter search to only show 5 cities using cityObj value
              items={search.slice(0, 5)}
              value={select}
              onSelect={(item) => {
              //setting city with city, state instead of value
                setCityContextWithClick([item.city, item.state])}}
              // ---- Handler for search bar input set search and suggestions
              onChange={(e) => {
                e.preventDefault();
                setSelect(e.target.value);
              }}
            >
            </DatalistInput>
          <button onClick= {(e) => clearButton(e)} >
          <FontAwesomeIcon icon={faXmark} className="clear-search" />
        </button>
      </form>
    </div>
  );
}
