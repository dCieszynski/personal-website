import { screen, render } from "@testing-library/react";
import Projects from "../../pages/Projects";

describe("Projects page", () => {
  test("renders Projects page", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
