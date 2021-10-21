// import { useContext } from "react";
// import TelefonoContext from "../../context/TelefonoContext";
// import PropTypes from "prop-types";
import "./Key.css";
import { useState } from "react";

const Key = ({ contenidoBotones, className }) => {
  // const { contenidoBotones } = useContext(TelefonoContext);
  ////////AQUI------->
  const [botonClickado, setbotonClickado] = useState([""]);
  const marcarNumero = (evento) => {
    const botonClick = evento.target.childNodes[0].data;
    setbotonClickado({ botonClick });
    return botonClickado;
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
