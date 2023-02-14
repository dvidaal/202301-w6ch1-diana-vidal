import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'To Do List'", () => {
      const expectedResult = "To Do list ✅";

      render(<Layout />);

      const result = screen.getByText(expectedResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show that renderds a form", () => {
      const expectedResultForm = "Field to create a task";

      render(<Layout />);

      const result = screen.getByLabelText(expectedResultForm);

      expect(result).toBeInTheDocument();
    });
  });
});
