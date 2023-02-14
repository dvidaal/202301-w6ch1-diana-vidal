import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Given a task card component", () => {
  describe("When rendered", () => {
    test("Then it should show a task with the text 'Entender lo que me pregunta Mario sobre el BEM'", () => {
      const expectedResult =
        "❌ Entender lo que me pregunta Mario sobre el BEM";

      render(<TaskCard />);

      const result = screen.getByText(expectedResult);

      expect(result).toBeInTheDocument();
    });
  });
});
