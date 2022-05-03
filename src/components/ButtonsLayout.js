import ButtonFunc from "./ButtonFunction";
import ButtonNum from "./ButtonNumber";

import classes from "./Buttons.module.css";

function ButtonsLayout() {
  return (
    <div>
      <table className={classes.calc_body}>
        <tbody>
          <tr>
            <ButtonFunc valor="C" content="C" />

            <ButtonFunc
              valor="erase"
              content={<i className="bi bi-arrow-left-square-fill" />}
            />

            <ButtonFunc valor="%" content="%" />

            <ButtonFunc valor="/" content="/" />
          </tr>
          <tr>
            <ButtonNum valor="7" content="7" />

            <ButtonNum valor="8" content="8" />

            <ButtonNum valor="9" content="9" />

            <ButtonFunc valor="x" content="x" />
          </tr>
          <tr>
            <ButtonNum valor="4" content="4" />

            <ButtonNum valor="5" content="5" />

            <ButtonNum valor="6" content="6" />

            <ButtonFunc valor="-" content="-" />
          </tr>
          <tr>
            <ButtonNum valor="1" content="1" />

            <ButtonNum valor="2" content="2" />

            <ButtonNum valor="3" content="3" />

            <ButtonFunc valor="+" content="+" />
          </tr>
          <tr>
            <ButtonFunc valor="nada" content="?" />

            <ButtonNum valor="0" content="0" />

            <ButtonFunc valor="," content="," />

            <ButtonFunc valor="=" content="=" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ButtonsLayout;
