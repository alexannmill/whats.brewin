import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react"
import ('dotenv').config()


const BreweryImage= (props) => {
  
  // const {brewery} = useContext();
  // const key = process.env.key
 
  const urlEncode = (encodeURIComponent(`${props.brewery} logo`));
     
useEffect(() => {
  console.log('props.brewery:', props.brewery)
  console.log('urlEncode:', urlEncode)
  axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAAapLfYwQU3rjIawAl3_FgmPFZ_ZfZ910&cx=017576662512468239146:omuauf_lfve&q=${urlEncode}`)
    .then((res) => {
      console.log('res:', res)
    })
}, [])
  return (
    <div></div>
  );
};

export default BreweryImage;
