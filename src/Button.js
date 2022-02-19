import React from "react";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
