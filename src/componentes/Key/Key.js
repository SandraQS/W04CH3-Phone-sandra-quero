import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
// import PropTypes from "prop-types";
import "./Key.css";

const Key = ({ contenidoBotones, className }) => {
  const { numerosPantalla, setNumerosPantalla } = useContext(TelefonoContext);
  ////////AQUI------->
  const marcarNumero = (evento) => {
    const botonClick = evento.target.textContent;
    if (numerosPantalla.length < 9) {
      setNumerosPantalla([...numerosPantalla, `${botonClick}`]);
      // return numerosPantalla;
      console.log(numerosPantalla);
    }
  };
  /////////<<---------

  return (
    <li>
      <button className={className} onClick={(evento) => marcarNumero(evento)}>
        {contenidoBotones}
      </button>
    </li>
  );
};

export default Key;
