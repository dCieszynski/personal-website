import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";
import { BrowserRouter } from "react-router-dom";

describe("Layout", () => {
  test("renders Layout component", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
