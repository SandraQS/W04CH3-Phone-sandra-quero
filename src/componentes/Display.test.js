import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given an Display component", () => {
  describe("When it recibes a array [1234]", () => {
    test("Then it should show '1234'", () => {
      const numerosPantalla = [1234];
      const resultadoEsperado = "1234";

      render(<Display numerosPantalla={numerosPantalla} />);

      const textoPantalla = screen.getByText(resultadoEsperado);

      expect(textoPantalla).toBeIntheDocument();
      screen.debug();
    });
  });
});
