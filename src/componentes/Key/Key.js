// import { useContext } from "react";
// import TelefonoContext from "../../context/TelefonoContext";
// import PropTypes from "prop-types";
import "./Key.css";

const Key = ({ contenidoBotones, className }) => {
  // const { contenidoBotones } = useContext(TelefonoContext);
  return (
    <li>
      <button className={className}>{contenidoBotones}</button>
    </li>
  );
};

export default Key;
