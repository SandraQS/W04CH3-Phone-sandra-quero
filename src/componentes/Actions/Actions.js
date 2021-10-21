import TelefonoContext from "../../context/TelefonoContext";
import Action from "../Action/Action";
import { useContext } from "react";

const Actions = () => {
  const { enLlamada } = useContext(TelefonoContext);
  return (
    <Action
      textoBoton={enLlamada ? "Hang" : "Call"}
      className={enLlamada ? "hang" : "call"}
    />
  );
};

export default Actions;
