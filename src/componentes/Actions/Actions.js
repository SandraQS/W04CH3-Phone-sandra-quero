import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
import Action from "../Action/Action";

const Actions = () => {
  const {
    enLlamada,
    setEnLlamada,
    nueveDigitos,
    setNumerosPantalla,
    botones,
    setBotones,
  } = useContext(TelefonoContext);
  const llamarColgar = (evento) => {
    evento.preventDefault();
    if (nueveDigitos) {
      setEnLlamada(!enLlamada);
      setBotones([
        { id: 1, texto: 1, estadoClick: false },
        { id: 2, texto: 2, estadoClick: false },
        { id: 3, texto: 3, estadoClick: false },
        { id: 4, texto: 4, estadoClick: false },
        { id: 5, texto: 5, estadoClick: false },
        { id: 6, texto: 6, estadoClick: false },
        { id: 7, texto: 7, estadoClick: false },
        { id: 8, texto: 8, estadoClick: false },
        { id: 9, texto: 9, estadoClick: false },
        { id: 10, texto: 0, estadoClick: false },
        { id: 11, texto: "delete", estadoClick: false },
      ]);
    }
    if (enLlamada) {
      setNumerosPantalla("");
      setEnLlamada(!enLlamada);
      setBotones([
        { id: 1, texto: 1, estadoClick: true },
        { id: 2, texto: 2, estadoClick: true },
        { id: 3, texto: 3, estadoClick: true },
        { id: 4, texto: 4, estadoClick: true },
        { id: 5, texto: 5, estadoClick: true },
        { id: 6, texto: 6, estadoClick: true },
        { id: 7, texto: 7, estadoClick: true },
        { id: 8, texto: 8, estadoClick: true },
        { id: 9, texto: 9, estadoClick: true },
        { id: 10, texto: 0, estadoClick: true },
        { id: 11, texto: "delete", estadoClick: true },
      ]);
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
