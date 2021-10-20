import PropTypes from "prop-types";
import "./Info.css";

const Info = ({ mensajeLlamando }) => {
  return <span className="message">{mensajeLlamando}</span>;
};

Info.prototype = {
  mensajeLlamando: PropTypes.string.isRequired,
};

export default Info;
