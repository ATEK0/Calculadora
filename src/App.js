import ButtonsLayout from "./components/ButtonsLayout";
import Visor from "./components/Visor";
import classes from "./App.module.css";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className={classes.calculator}>
      <h1 className={classes.titulo}>
        Calculadoraㅤ
        <img
          className={classes.icon}
          alt="Xiaomi Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png"
        />
      </h1>
      <Visor />
      <ButtonsLayout />
    </div>
  );
}

export default App;
