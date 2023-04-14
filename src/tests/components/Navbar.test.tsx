import { screen, render } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(
      <BrowserRouter>
        <Navbar links={[{ to: "home", title: "Home" }]} />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
