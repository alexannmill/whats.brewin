import React, { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../Contexts/LoginContext";
import "./Form.css";
import { motion } from "framer-motion";

const FormUsers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [checked, setChecked] = useState("");

  const { setUser, setShowUser, user } = useContext(LoginContext);

  const formhandle = (e) => {
    e.preventDefault();
    // Users registrating
    if (props.children === "Register") {
      return axios
        .post("/users/register", {
          name,
          email,
          password,
          brewery: checked,
        })
        .then((data) => {
          console.log("register");

          setUser({ ...data.data, favoritedBreweries: [] });
          setShowUser(true);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch(() => {
          setAlert(true);
        });
    }
    // users Loging in
    return axios
      .post("/users/login", {
        email,
        password,
      })
      .then((data) => {
        console.log("login");
        setUser({ ...data.data.user, favoritedBreweries: [...data.data.fav] });
        setShowUser(true);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch(() => {
        setAlert(true);
      });
  };

  return (
    <motion.div
      className="FormUsers overflow-scroll"
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
      <div className="overflow-scroll rounded flex flex-col items-center ">
        <form className="form" onSubmit={(e) => formhandle(e)}>
          <h1 className="title mb-6 font-bold text-3xl">
            Please {props.children}
          </h1>
          {alert && <>opps it looks like something is wrong.</>}
          <div className=" rounded flex flex-col items-center ">
            {props.children === "Register" && (
              <>
                <label>Are you a brewery owner?</label>
                <input
                  type="checkbox"
                  name="user"
                  value={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label className="mt-3">User Name</label>
                <input
                  type="text"
                  name="user"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="User Name"
                />
              </>
            )}
            <label className="mt-3">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              placeholder="Email"
            />
            <label className="mt-3">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
            />
            {props.children === "Register" && (
              <>
                <label className="mt-3">Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="text"
                  placeholder="Confirm Password"
                />
              </>
            )}
            <button
              style={{ backgroundColor: "#0568A0" }}
              type="submit"
              className="bg-sky-500 border-black rounded-full p-2 text-white hover:bg-sky-700 m-3 w-1/2"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default FormUsers;
