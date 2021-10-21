import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Dado el componente Info", () => {
  describe("Cuando le pasamos la clase 'off'", () => {
    test("Entonces deberia obtener la clase 'off", () => {
      const mensaje = "Calling...";
      const claseEsperada = "off";

      render(<Info className={claseEsperada} />);
      const mensajeMostrado = screen.getByText(mensaje);
      screen.debug();

      expect(mensajeMostrado).toHaveClass(claseEsperada);
    });
  });
});
