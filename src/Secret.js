import React from "react";

const Secret = (props) => {
  const SecretNumberHandler = () => {
    console.log(props.secretNumber);
  };

  return (
    <div onClick={SecretNumberHandler} className="number">
      {props.secretNumber}
    </div>
  );
};
export default Secret;
