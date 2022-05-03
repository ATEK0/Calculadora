import classes from "./Visor.module.css";

function Visor(props) {
  return (
    <div className={classes.mainVisor}>
      <input
        id="visor"
        value="11"
        readOnly="readonly"
        className={classes.lcd_calculadora}
        type="text"
      />
    </div>
  );
}

export default Visor;
