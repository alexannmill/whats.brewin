import axios from "axios";
import { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { brewerContext } from "../../Contexts/BrewerContext";
import { LoginContext } from "../../Contexts/LoginContext";
import { motion } from "framer-motion";
import UploadImage from "./UploadImage";
import "./Brewers.css";

export default function EditForm() {
  // ---- Context
  const { user } = useContext(LoginContext);
  const { brewer, setBrewer } = useContext(brewerContext);

  // ---- States
  const [brewery, setBrewery] = useState(brewer.brewery);
  const [street_number, setStreet_number] = useState(brewer.street_number);
  const [street, setStreet] = useState(brewer.street);
  const [city, setCity] = useState(brewer.city);
  const [state_prov, setState_prov] = useState(brewer.state_prov);
  const [post_zip, setPost_zip] = useState(brewer.post_zip);
  const [website, setWebsite] = useState(brewer.website);
  const [phone, setPhone] = useState(brewer.phone);

  // ---- React route manual redirect to avoid link tag
  const navigate = useNavigate();
  const redirect = useCallback(
    () => navigate("/brewer/home", { replace: true }),
    [navigate]
  );

  const submitForm = (e) => {
    e.preventDefault();
    return axios
      .post("/brewers/edit", {
        user_id: user.id,
        brewery,
        street_number,
        street,
        city,
        state_prov,
        post_zip,
        website,
        phone,
      })
      .then((res) => {
        console.log(res);
        setBrewer({
          brewery: res.data.brewery,
          street_number: res.data.street_number,
          street: res.data.street,
          city: res.data.city,
          state_prov: res.data.state_prov,
          post_zip: res.data.post_zip,
          website: res.data.website,
          phone: res.data.phone,
        });
        redirect();
      });
  };

  return (
    <motion.div
      initial={{ translateY: "100%" }}
      animate={{
        translateY: "0%",
        transition: { ease: "easeInOut", duration: 0.5 },
      }}
      exit={{
        translateY: "-200%",
        transition: { ease: "easeInOut", duration: 0.75 },
      }}
    >
      <div className="home-page overflow-scroll home-page bg-cover bg-center">
        <div className="brewery-title ">
          <h1>Brewery Information</h1>
        </div>
        <UploadImage />
        <div className="form-inputs">
          <form 
           action="/posts/new" 
           method="post" 
           encType="multipart/form-data" 
           >
            <div className="columns-2">
              <div>
                <label>Brewery: </label>
                <input
                  type="text"
                  name="brewery"
                  onChange={(e) => setBrewery(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Street #: </label>
                <input
                  type="text"
                  name="street_number"
                  onChange={(e) => setStreet_number(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Street: </label>
                <input
                  type="text"
                  name="street"
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>City: </label>
                <input
                  type="text"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>State/Province: </label>
                <input
                  type="text"
                  name="sate_prov"
                  onChange={(e) => setState_prov(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Zip/Postal Code: </label>
                <input
                  type="text"
                  name="post_zip"
                  onChange={(e) => setPost_zip(e.target.value)}
                  id="post-zip"
                  size="6"
                  required
                />
              </div>
              <div>
                <label>Website: </label>
                <input
                  type="url"
                  name="website"
                  id="url"
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://example.com"
                  pattern="https://.*"
                  size="30"
                  required
                />
              </div>
              <div>
                <label>Phone: </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(000)-000-0000"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
            </div>
            <div className="submit-button">
              <button id="submit-button" type="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
