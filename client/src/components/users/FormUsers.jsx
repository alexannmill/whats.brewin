import React, { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../Contexts/LoginContext";

const FormUsers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser, setShowUser } = useContext(LoginContext);

  const formhandle = (e) => {
    e.preventDefault();

    axios
      .post("/users", {
        name,
        email,
        password,
      })
      .then((data) => {
        setUser(data.data);
        setShowUser(true);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
  };

  return (
    <div className=" bg-cover bg-center back h-screen">
      <div className=" rounded flex flex-col items-center color-white ">
        <h1 className="text-black">Please {props.children}</h1>
        <form className="bg-white" onSubmit={(e) => formhandle(e)}>
          <div className=" rounded flex flex-col items-center p-20">
            {props.children === "Register" && (
              <>
                <label className="text-blue-500">User Name</label>
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
              className="bg-sky-500 border-1 border-black rounded-full p-2 text-white hover:bg-sky-700 m-3"
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
