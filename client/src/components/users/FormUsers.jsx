import React from "react";

const FormUsers = (props) => {
  return (
    <div className="card rounded">
      <h1 className="text-black">Please {props.children}</h1>
      <form>
        input
        {props.children === "Register" && (
          <p className="text-black">it works?</p>
        )}
      </form>
    </div>
  );
};

export default FormUsers;
