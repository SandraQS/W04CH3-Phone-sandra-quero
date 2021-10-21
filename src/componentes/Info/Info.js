import PropTypes from "prop-types";
import "./Info.css";

const Info = ({ className }) => {
  const mensaje = "Calling...";
  return <span className={`message ${className}`}>{mensaje}</span>;
};

Info.prototype = {
  mensajeLlamando: PropTypes.string.isRequired,
};

export default Info;
