import React, { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../Contexts/LoginContext";
import "./Form.css";

const FormUsers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser, setShowUser } = useContext(LoginContext);

  const formhandle = (e) => {
    e.preventDefault();
    // Users registrating
    if (props.children === "Register") {
      axios
        .post("/users", {
          name,
          email,
          password,
        })
        .then((data) => {
          setUser({ ...data.data, favoritedBreweries: [] });
          setShowUser(true);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    }
    // users Loging in
    axios
      .post("/users/login", {
        email,
        password,
      })
      .then((res) => console.log("welcome", res));
  };

  return (
    <div className="FormUsers">
      <div className=" rounded flex flex-col items-center ">
        <form className="form" onSubmit={(e) => formhandle(e)}>
          <h1 className="title mb-6">Please {props.children}</h1>
          <div className=" rounded flex flex-col items-center ">
            {props.children === "Register" && (
              <>
                <label>User Name</label>
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
