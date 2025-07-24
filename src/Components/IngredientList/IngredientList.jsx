import React from "react";
import "../../App.css";

const IngredientList = (props) => {
  return (
    <li style={{ backgroundColor: props.color }}>
      {props.name}
      <button onClick={() => props.addToStackFn(props.name)}>x</button>
    </li>
  );
};

// Cannot pu h1 or ul... flexing always must do at that parent level

export default IngredientList;
