import React, { useState } from "react";

const FormUsers = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formhandle = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  };

  return (
    <div className="card rounded flex flex-col items-center  ">
      <h1 className="text-black">Please {props.children}</h1>
      <form onSubmit={(e) => formhandle(e)}>
        <div className="card rounded flex flex-col items-center p-20">
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
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          {props.children === "Register" && (
            <>
              <label>Confirm Password</label>
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
