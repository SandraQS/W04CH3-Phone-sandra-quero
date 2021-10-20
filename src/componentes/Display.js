import { useContext } from "react";
import TelefonoContext from "../context/TelefonoContext";
import PropTypes from "prop-types";
import "./Display.css";

const Display = () => {
  const { numerosPantalla } = useContext(TelefonoContext);
  return <span className="number">{numerosPantalla}</span>;
};

Display.propTypes = {
  numerosPantalla: PropTypes.array.isRequired,
};

export default Display;
