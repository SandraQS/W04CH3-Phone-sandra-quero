import "./Action.css";

const Action = ({ textoBoton, className }) => {
  return (
    <a
      href="https://github.com/SandraQS/W04CH3-sandra-quero/pull/4"
      className={className}
    >
      {textoBoton}
    </a>
  );
};

export default Action;
