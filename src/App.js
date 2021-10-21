import { useState } from "react";
import "./App.css";
import Display from "./componentes/Display";
import Info from "./componentes/Info/Info";
import TelefonoContext from "./context/TelefonoContext";
import Prueba from "./componentes/Keyboard/Keyboard";
import Actions from "./componentes/Actions/Actions";

function App() {
  const [numerosPantalla, setNumerosPantalla] = useState([]);
  const [enLlamada /*setenLlamada*/] = useState(false);
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
        value={{ numerosPantalla, setNumerosPantalla, enLlamada, botones }}
      >
        <Display numerosPantalla={numerosPantalla} />
        {enLlamada ? <Info mensajeLlamando={"Calling..."} /> : ""}
        <div className="keyboard-container">
          <Prueba botones={botones} />
        </div>
        <div className="actions">
          <Actions enLlamada={enLlamada} />
        </div>
      </TelefonoContext.Provider>
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      {/* <span class="message">Calling...</span>
      <main class="phone">
        <div class="keyboard-container">
          <ol class="keyboard">
            <li>
              <button class="key">1</button>
            </li>
            <li>
              <button class="key">2</button>
            </li>
            <li>
              <button class="key">3</button>
            </li>
            <li>
              <button class="key">4</button>
            </li>
            <li>
              <button class="key">5</button>
            </li>
            <li>
              <button class="key">6</button>
            </li>
            <li>
              <button class="key">7</button>
            </li>
            <li>
              <button class="key">8</button>
            </li>
            <li>
              <button class="key">9</button>
            </li>
            <li>
              <button class="key">0</button>
            </li>
            <li>
              <button class="key big">delete</button>
            </li>
          </ol>
        </div>
        <div class="actions">
          
          {/* <span class="number">667359961</span> */}
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras --> */}
      {/* <a href="#" class="call"> */}
      {/* Call */}
      {/* </a> */}
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      {/* <a href="#" class="hang active"> */}
      {/* Hang
          </a>
        </div>
      </main> */}
    </div>
  );
}

export default App;
