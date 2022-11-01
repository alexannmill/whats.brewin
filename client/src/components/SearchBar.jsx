import { useEffect, useState } from "react";
import axios from "axios";
import "react-datalist-input/dist/styles.css";

// ---- Components
import DatalistInput from "react-datalist-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(props) {
  const [city, setCity] = useState(props.geolocation);
  const [search, setSearch] = useState([]);
  const [select, setSelect] = useState("");

  // ---- Input - onChange axios  to cities db for drop down
  useEffect(() => {
    axios.get(`/cities/${select}`).then((res) => {
      // ---- For empty form
      if (select === "") return;
      // --- Parse data from db
      const incomingData = res.data.map((opt, i) => {
        return { id: [i], value: [`${opt.city}, ${opt.state}`] };
      });
      setSearch(incomingData);
    });
  }, [select]);

  return (
    <div className="total-searchbar">
      {!props.nav && (
        <h1 className="text-gray-50 text-8xl font-extrabold">
          See What's Brewin'
        </h1>
      )}
      <form
        onSelect={(e) => setCity(e.target.value)}
        className="search-with-buttons"
      >
        <button onClick={(e) => setCity(props.geolocation)}>
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className="set-current"
          />
        </button>
        {props.nav ? (
          <DatalistInput
            className="Search-bar-input"
            label="See What's Brewin'"
            placeholder="Enter A City"
            // showLabel={false}
            // ---- Filter search to only show 5 cities
            items={search.slice(0, 5)}
            value={select}
            // ---- Handler for search bar input set search and suggestions
            onChange={(e) => {
              e.preventDefault();
              setSelect(e.target.value);
            }}
          ></DatalistInput>
        ) : (
          <>
            <DatalistInput
              className="Search-bar-input"
              label="See What's Brewin'"
              placeholder="Enter A City"
              showLabel={false}
              // ---- Filter search to only show 5 cities
              items={search.slice(0, 5)}
              value={select}
              // ---- Handler for search bar input set search and suggestions
              onChange={(e) => {
                e.preventDefault();
                setSelect(e.target.value);
              }}
            ></DatalistInput>
          </>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setSelect("");
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="clear-search" />
        </button>
      </form>
    </div>
  );
}
