import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Display component", () => {
  describe("When it recibes a string 'Calling...'", () => {
    test("Then it should show 'Calling...'", () => {
      const mensaje = "Calling...";
      const mensajeEsperado = "Calling...";

      render(<Info mensaje={mensaje} />);

      screen.debug();

      const frase = screen.getByText(mensajeEsperado);

      expect(frase).toBeIntheDocument();
    });
  });
});
