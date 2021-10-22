import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
import PropTypes from "prop-types";
// import "./Keyboard.css";
import Key from "../Key/Key";
import "./Keyboard.css";
const Keyboard = () => {
  const { botones } = useContext(TelefonoContext);

  return (
    <>
      <ol className="keyboard">
        {botones.map((boton) => (
          <Key
            key={boton.id}
            contenidoBotones={boton.texto}
            className={boton.id === 11 ? "key big" : "key"}
          />
        ))}
      </ol>
    </>
  );
};
Keyboard.prototype = {
  botones: PropTypes.array.isRequired,
};

export default Keyboard;
