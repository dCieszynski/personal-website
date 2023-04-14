import { screen, render } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Home", () => {
  test("renders Home component", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
