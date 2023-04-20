import { screen, render } from "@testing-library/react";
import About from "../../pages/About";

describe("About page", () => {
  test("renders About page", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
