import React, { useState } from "react";
import axios from "axios";

const FormUsers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const formhandle = (e) => {
    e.preventDefault();

    setAlert(false);
    axios
      .post("/users", {
        name,
        email,
        password,
      })
      .then((data) => console.log("Welcome"));
  };

  return (
    <div className="card rounded flex flex-col items-center  ">
      <h1 className="text-black">Please {props.children}</h1>
      <form onSubmit={(e) => formhandle(e)}>
        <div className="card rounded flex flex-col items-center p-20">
          {alert && (
            <div className="  border-2 border-red-500 p-3">
              🍺 It seems like we are missing some information in order to
              continue 🍺
            </div>
          )}

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
            className="bg-sky-500 border-1 border-black rounded-full p-2 text-white hover:bg-sky-700 m-3"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUsers;
