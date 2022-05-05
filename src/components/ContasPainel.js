import classes from "./ContasPainel.module.css";

import { useState } from "react";

function ContasPainel(props) {
  const [prop_number, SetPropNumber] = useState();
  console.log(props.teste);
  console.log(props.teste2);
  return (
    <div>
      <label className={classes.label_conta}>{props.abcd}</label>
    </div>
  );
}

export default ContasPainel;
