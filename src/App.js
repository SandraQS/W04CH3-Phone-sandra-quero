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
  const [botones, setBotones] = useState([
    { id: 1, texto: 1, estadoClick: true },
    { id: 2, texto: 2, estadoClick: true },
    { id: 3, texto: 3, estadoClick: true },
    { id: 4, texto: 4, estadoClick: true },
    { id: 5, texto: 5, estadoClick: true },
    { id: 6, texto: 6, estadoClick: true },
    { id: 7, texto: 7, estadoClick: true },
    { id: 8, texto: 8, estadoClick: true },
    { id: 9, texto: 9, estadoClick: true },
    { id: 10, texto: 0, estadoClick: true },
    { id: 11, texto: "delete", estadoClick: true },
  ]);

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
