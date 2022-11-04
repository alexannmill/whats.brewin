import React from "react";

const Confirm = (props) => {
  return (
    <main className="brewery-detail group">
      <h1 className="">Delete from favourites?</h1>
      <div className="flex justify-around ">
        <button
          onClick={() => props.setC(false)}
          className="hover:bg-[#e8b476] p-1 rounded-3xl"
        >
          Cancel
        </button>
        <button
          onClick={props.onConfirm}
          className="hover:bg-[#ff2b2b] p-1 rounded-3xl"
        >
          Confirm
        </button>
      </div>
    </main>
  );
};

export default Confirm;
