import ButtonFunc from "./ButtonFunction";
import ButtonNum from "./ButtonNumber";
import ContasPainel, { onLoadDo } from "./ContasPainel";
import Visor from "./Visor";

import { useState } from "react";

import classes from "./Buttons.module.css";

function ButtonsLayout() {
  const [visorView, SetVisor] = useState("");
  const [components, setComponents] = useState([""]);
  const [logData, SetLogData] = useState("");

  function writeVisor(e) {
    SetVisor(visorView + e);
  }

  function funcsVisor(e) {
    if (e == "=") {
      console.log(visorView);
      console.log("=");
      SetLogData(visorView);
      setComponents([...components, visorView]);
    }

    if (e == "C") {
      SetVisor("");
      console.log("C");
    }
  }

  return (
    <div>
      <Visor valorTela={visorView} />
      <table className={classes.calc_body}>
        <tbody>
          <tr>
            <ButtonFunc valor="C" content="C" event={funcsVisor} />

            <ButtonFunc
              valor="erase"
              content={<i className="bi bi-arrow-left-square-fill" />}
              event={funcsVisor}
            />

            <ButtonFunc valor="%" content="%" event={funcsVisor} />

            <ButtonFunc valor="/" content="/" event={funcsVisor} />
          </tr>
          <tr>
            <ButtonNum valor="7" content="7" event={writeVisor} />

            <ButtonNum valor="8" content="8" event={writeVisor} />

            <ButtonNum valor="9" content="9" event={writeVisor} />

            <ButtonFunc valor="x" content="x" event={funcsVisor} />
          </tr>
          <tr>
            <ButtonNum valor="4" content="4" event={writeVisor} />

            <ButtonNum valor="5" content="5" event={writeVisor} />

            <ButtonNum valor="6" content="6" event={writeVisor} />

            <ButtonFunc valor="-" content="-" event={funcsVisor} />
          </tr>
          <tr>
            <ButtonNum valor="1" content="1" event={writeVisor} />

            <ButtonNum valor="2" content="2" event={writeVisor} />

            <ButtonNum valor="3" content="3" event={writeVisor} />

            <ButtonFunc valor="+" content="+" event={funcsVisor} />
          </tr>
          <tr>
            <ButtonFunc valor="nada" content="?" event={funcsVisor} />

            <ButtonNum valor="0" content="0" event={writeVisor} />

            <ButtonFunc valor="," content="," event={funcsVisor} />

            <ButtonFunc valor="=" content="=" event={funcsVisor} />
          </tr>
        </tbody>
      </table>
      {components.map((item, i) => (
        <ContasPainel abcd={item} teste={item} teste2={i} />
      ))}
    </div>
  );
}

export default ButtonsLayout;
