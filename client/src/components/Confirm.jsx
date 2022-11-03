import React from "react";

const Confirm = (props) => {
  return (
    <main className="">
      <h1 className=""></h1>
      <section className="">
        <button onClick={() => props.setC(false)}>Cancel</button>
        <button>Confirm</button>
      </section>
    </main>
  );
};

export default Confirm;
