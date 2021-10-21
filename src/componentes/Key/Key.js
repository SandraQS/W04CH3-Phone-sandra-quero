import { useContext } from "react";
import TelefonoContext from "../../context/TelefonoContext";
import PropTypes from "prop-types";
import "./Key.css";

const Key = ({ contenidoBotones }) => {
  // const { contenidoBotones } = useContext(TelefonoContext);
  return (
    <li>
      <button className="key">{contenidoBotones}</button>
    </li>
  );
};

export default Key;
