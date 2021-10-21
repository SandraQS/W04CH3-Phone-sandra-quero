import { useState } from "react";
import "./App.css";
import Display from "./componentes/Display";
import Info from "./componentes/Info/Info";
import TelefonoContext from "./context/TelefonoContext";
import Prueba from "./componentes/Keyboard/Keyboard";
import Actions from "./componentes/Actions/Actions";

function App() {
  const [numerosPantalla, setNumerosPantalla] = useState([]);
  const [enLlamada, setEnLlamada] = useState(false);
  const [nueveDigitos, setNueveDigitos] = useState(false);
  const botones = [
    { id: 1, texto: 1, estadoClick: false },
    { id: 2, texto: 2, estadoClick: false },
    { id: 3, texto: 3, estadoClick: false },
    { id: 4, texto: 4, estadoClick: false },
    { id: 5, texto: 5, estadoClick: false },
    { id: 6, texto: 6, estadoClick: false },
    { id: 7, texto: 7, estadoClick: false },
    { id: 8, texto: 8, estadoClick: false },
    { id: 9, texto: 9, estadoClick: false },
    { id: 10, texto: 0, estadoClick: false },
    { id: 11, texto: "delete", estadoClick: false },
  ];

  return (
    <div className="container">
      <TelefonoContext.Provider
        value={{
          numerosPantalla,
          setNumerosPantalla,
          enLlamada,
          setEnLlamada,
          botones,
          nueveDigitos,
          setNueveDigitos,
        }}
      >
        <Display numerosPantalla={numerosPantalla} />
        <Info className={enLlamada ? "" : "off"} />
        <div className="keyboard-container">
          <Prueba botones={botones} />
        </div>
        <div className="actions">
          <Actions enLlamada={enLlamada} />
        </div>
      </TelefonoContext.Provider>
    </div>
  );
}

export default App;
