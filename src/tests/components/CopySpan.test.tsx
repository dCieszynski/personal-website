import { screen, render, waitFor } from "@testing-library/react";
import CopySpan from "../../components/CopySpan";

describe("CopySpan", () => {
  test("renders component", () => {
    render(<CopySpan content="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("copy to clipboard", () => {
    render(<CopySpan content="test" />);
    const span = screen.getByText("test");
    span.click();

    waitFor(() => {
      expect(screen.getByTitle("Success")).toBeInTheDocument();
    });
  });
});
