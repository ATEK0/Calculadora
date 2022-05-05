import React from "react";
import classes from "./Buttons.module.css";

function ButtonFunction(props) {
  return (
    <td>
      <button
        onClick={() => props.event(props.valor)}
        value={props.valor}
        className={classes.function_button}
      >
        {props.content}
      </button>
    </td>
  );
}

export default ButtonFunction;
