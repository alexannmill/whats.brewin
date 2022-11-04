import React, { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../Contexts/LoginContext";
import "./Form.css";

const FormUsers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [checked, setChecked] = useState("");

  const { setUser, setShowUser } = useContext(LoginContext);

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
    axios
      .post("/users/login", {
        email,
        password,
      })
      .then((data) => {
        console.log(data);
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
  };

  return (
    <div className="FormUsers">
      <div className=" rounded flex flex-col items-center ">
        <form className="form" onSubmit={(e) => formhandle(e)}>
          <h1 className="title mb-6">Please {props.children}</h1>
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
              type="submit"
              className="bg-sky-500 border-black rounded-full p-2 text-white hover:bg-sky-700 m-3 w-1/2"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUsers;
