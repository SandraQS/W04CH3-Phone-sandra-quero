- App:
  .Muestra todos los componentes.
  .Contiene array vacio valores de los botones. Condicion tope 9.
  .Array objetos que cambia de estado.
  .Pasa array al display.
  .Funcion tiempo de llamada.
  .Funcion Borrar.
  .Funcion LLamar.
  .Bloquea teclado.
  .Aparece Info
  .Se activa boton colgar desactiva llamar
  .Contador tiempo llamada.
  .Estado inicial todo.

- Info:
  .Renderiza el mensaje.
  .Lo muestra segun una condicion recibida.

- Display:
  .Renderiza cada numero recibido

- Actions:
  .Muestra un boton recibido segun el estado.
  .Pasa texto a action.
  .Pasa una classe al action.
  .Pasa una funcion a action.

  - Action:
    .Renderiza texto recibido.
    .Recibe asigna classes.
    .Recibe una función.
    .Recibe estado

- Keyboard:
  .Muestra Key.
  .Pasa texto a key.
  .Pasa function a key según condicion.
  .Recibe un estado que activa o desactivan botones.

  - Key:
    .Renderiza un botton con texto recibido.
    .Recibe una funcion que se ejecuta cunado se hace onClick.
