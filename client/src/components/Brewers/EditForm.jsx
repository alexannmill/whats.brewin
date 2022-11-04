import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import  LogoImage  from "./LogoImage"


export default function EditForm() {

  const { user } = useContext(LoginContext)

  const [brewery, setBrewery] = useState("")
  const [street_number, setStreet_number] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state_prov, setState_prov] = useState("")
  const [post_zip, setPost_zip] = useState("")
  const [website, setWebsite] = useState("")
  const [phone, setPhone] = useState("")


  const submitForm = (e) => {
    e.preventDefault();
    console.log('e:', e)
    return axios
      .post('/brewers/edit', {
        user_id: "1",
        brewery,
        street_number,
        street,
        city,
        state_prov,
        post_zip,
        website,
        phone,
      })
      .then(() => {

      })
  }


  return (
    
    <div className="bg-neutral-200 h-screen">
      <h1 className="title">Brewery Information</h1>
        <LogoImage />
      <form onSubmit={(e) => submitForm(e)}>
        <label>Brewery: </label>
        <input 
          type="text"
          name="brewery"
          onChange={(e) => setBrewery(e.target.value)}
          required
          />
        <label>Street #: </label>
        <input 
          type="text" 
          name="street_number"
          onChange={(e) => setStreet_number(e.target.value)}
          required
          />
        <label>Street: </label>
        <input 
          type="text"
          name="street" 
          onChange={(e) => setStreet(e.target.value)}
          required
          />
        <label>City: </label>
        <input 
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          required
          />
        <label>State or Province: </label>
        <input 
          type="text"
          name="sate_prov"
          onChange={(e) => setState_prov(e.target.value)}
          // required
          />
        <label>Zip or Postal Code: </label>
        <input 
          type="text" 
          name="post_zip" 
          onChange={(e) => setPost_zip(e.target.value)}
          id="post-zip"
          // size="6"
          // required
        />
        <label>Website: </label>
        <input 
          // type="url" 
          name="website" 
          id="url"
          onChange={(e) => setWebsite(e.target.value)}
          // placeholder="https://example.com"
          // pattern="https://.*" 
          // size="30"
          required
        />
        <label>Phone: </label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          // placeholder="(000)-000-0000"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          // required 
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  
  );
}
