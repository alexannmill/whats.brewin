import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/Logo.png";

const Footer = () => {
  return (
    <footer className="grid place-items-center bg-[#1B252E] shadow-black shadow-2xl ">
      <div className="flex place-items-center ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-64" />
        </Link>
        <Link to="/">
          <h3 className="inline-block  align-middle text-white">Back home</h3>
        </Link>
        <a href="https://github.com/alexannmill/whats.brewin" target="_blank">
          <h3 className="inline-block  align-middle text-white">Github repo</h3>
        </a>
        <ul>
          <p>Contributors</p>
          <li>
            <a href="https://github.com/alexannmill" target="_blank">
              <h3 className="inline-block  align-middle text-white">
                Alex Miller
              </h3>
            </a>
          </li>
          <li>
            <a href="https://github.com/StanSurj98" target="_blank">
              <h3 className="inline-block  align-middle text-white">
                Stanley Surjanto
              </h3>
            </a>
          </li>
          <li>
            <a href="https://github.com/hugo-pb" target="_blank">
              <h3 className="inline-block  align-middle text-white">
                Hugo Palomera
              </h3>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
