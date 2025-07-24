import React from "react";
import "../../App.css";

const BurgerStack = (props) => {
  return (
    <li style={{ backgroundColor: props.color }}>
      {props.name}
      <button onClick={() => props.removeFromStackFn(props.id)}>x</button>
    </li>
  );
};
export default BurgerStack;
