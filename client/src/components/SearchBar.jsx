import { useEffect, useState } from "react";
import axios from "axios";
// import Select from "react-select";


// //props breweryName
export default function SearchBar(props) {



  const [city, setCity] = useState()
  const [search, setSearch] = useState([])
  const [select, setSelect] = useState("")
  

  // input - onChange axios  to cities db for drop down
  useEffect(() => {
    console.log('select:', select)
    axios
      .get(`/cities/newyork`)
      .then((res) => {
        console.log('res:', res)
        // const incomingData = res.data.map((opt) => {
          
        //   return {label:[opt.city, opt.state], value:[opt.city, opt.state]}
        // })

        // console.log('incomingData:', incomingData)
        // setSearch(incomingData)
      });
    }, [select]);


  //handler for search bar input set search and suggestions 
    // const searchBarHandler = (e) => {
    //   setSearch(e.target.value)
    //   setSelect(e.target.value)
    // }

  return (
    <div>
      <form >
        {/* <Select
        options={search}
        /> */}
        <input
          type="text"
          value={select}
          onChange={(e) => {
            console.log('e:', e.target)
            e.preventDefault()
            setSelect(e.target.value)}}
          onSubmit={(e) => setCity(e.target.value)}
        ></input>
        <input type={"submit"} value={"Submit"}></input>
      </form>
    </div>
  );
}