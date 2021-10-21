import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
import "./Action.css";

const Action = ({ textoBoton, className, onClick }) => {
  const { nueveDigitos } = useContext(TelefonoContext);

  return (
    <a
      href="a"
      className={`${className} ${nueveDigitos ? " active" : ""}`}
      onClick={(evento) => onClick(evento)}
    >
      {textoBoton}
      {console.log(nueveDigitos)}
    </a>
  );
};

export default Action;
