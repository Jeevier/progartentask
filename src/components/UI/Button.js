import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-teal-400 p-2 text-l rounded w-20 text-white"
      onClick={()=> props.handleClick("")}
    >
      {props.children}
    </button>
  );
};

export default Button;
