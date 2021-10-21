import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
import Action from "../Action/Action";

const Actions = () => {
  const { enLlamada, setEnLlamada, nueveDigitos } = useContext(TelefonoContext);
  const llamarColgar = (evento) => {
    evento.preventDefault();
    if (nueveDigitos) {
      setEnLlamada(!enLlamada);
    }
  };
  return (
    <Action
      textoBoton={enLlamada ? "Hang" : "Call"}
      className={enLlamada ? "hang" : "call"}
      onClick={llamarColgar}
    />
  );
};

export default Actions;
