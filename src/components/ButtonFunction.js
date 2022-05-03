import React from "react";
import classes from "./Buttons.module.css";

import Visor from "./Visor";

function ButtonFunction(props) {
  function writeVisor() {
    <Visor content={props.valor} />;
  }

  return (
    <td>
      <button
        onClick={writeVisor}
        value={props.valor}
        className={classes.function_button}
      >
        {props.content}
      </button>
    </td>
  );
}

export default ButtonFunction;
