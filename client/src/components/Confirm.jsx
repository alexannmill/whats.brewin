import React from "react";

const Confirm = (props) => {
  return (
    <main className="brewery-detail group">
      <h1 className="brewery-detail-text">Delete from favourites?</h1>
      <div className="flex justify-around ">
        <button
          onClick={() => props.setC(false)}
          className="hover:bg-[#FF8001] p-1 m-2 rounded-3xl font-sans font-light text-xl tracking-wider"
        >
          Cancel
        </button>
        <button
          onClick={props.onConfirm}
          className="hover:bg-[#ff2b2b] p-1 m-2 rounded-3xl font-sans font-light text-xl tracking-wider"
        >
          Confirm
        </button>
      </div>
    </main>
  );
};

export default Confirm;
