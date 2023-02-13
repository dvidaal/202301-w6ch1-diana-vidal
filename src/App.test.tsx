import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered App", () => {
    test("Then it should show a header with an h1 label inside", () => {
      render(<App />);

      const header = screen.getByRole("heading", { level: 1 });

      expect(header).toBeInTheDocument();
    });
  });
});
