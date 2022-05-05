import classes from "./Visor.module.css";

function Visor(props) {
  return (
    <div className={classes.mainVisor}>
      <input
        id="visor"
        value={props.valorTela}
        readOnly="readonly"
        className={classes.lcd_calculadora}
        type="text"
      />
    </div>
  );
}

export default Visor;
