import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
import PropTypes from "prop-types";
// import "./Keyboard.css";
import Key from "../Key/Key";

const Prueba = () => {
  const { botones } = useContext(TelefonoContext);
  return (
    <>
      <ol className="keyboard">
        {botones.map((boton) => (
          <Key key={boton.id} contenidoBotones={boton.texto} />
        ))}
      </ol>
    </>
  );
};

export default Prueba;
