import { screen, render } from "@testing-library/react";
import Home from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("renders Home component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("DAWID")).toBeInTheDocument();
    expect(screen.getByText("CIESZYŃSKI")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });

  test("renders buttons", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("View Github")).toBeInTheDocument();
  });
});
