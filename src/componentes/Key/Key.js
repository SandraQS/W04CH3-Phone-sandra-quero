import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
// import PropTypes from "prop-types";
import "./Key.css";

const Key = ({ contenidoBotones, className, disabled }) => {
  const { numerosPantalla, setNumerosPantalla, setNueveDigitos } =
    useContext(TelefonoContext);

  const marcarNumero = (evento) => {
    const botonClick = evento.target.textContent;
    if (botonClick !== "delete") {
      if (numerosPantalla.length < 9) {
        setNumerosPantalla([...numerosPantalla, `${botonClick}`]);
        setNueveDigitos(false);
      }
      if (numerosPantalla.length === 9) {
        setNueveDigitos(true);
      }
    } else {
      setNumerosPantalla("");
    }
  };

  return (
    <li>
      <button
        className={className}
        onClick={(evento) => marcarNumero(evento)}
        disabled={disabled}
      >
        {contenidoBotones}
      </button>
    </li>
  );
};

export default Key;
