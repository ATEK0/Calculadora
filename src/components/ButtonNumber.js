import React from "react";
import classes from "./Buttons.module.css";

function ButtonNumber(props) {
  return (
    <td>
      <button
        value={props.valor}
        className={classes.number_button}
        onClick={() => props.event(props.valor)}
      >
        {props.content}
      </button>
    </td>
  );
}

export default ButtonNumber;
