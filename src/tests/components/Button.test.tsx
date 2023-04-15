import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import Button from "../../components/Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button content={<a href="">Link</a>} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders Button component with content", () => {
    render(<Button content={<a href="">Link</a>} />);
    expect(screen.getByRole("button")).toHaveTextContent("Link");
  });

  test("handles onClick", () => {
    const onClick = vi.fn();
    render(<Button content={<a href="">Link</a>} onClick={onClick} />);
    screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalled();
  });

  test("renders Button with props", () => {
    render(<Button content={<a href="">Link</a>} color="black" onClick={vi.fn()} />);
  });
});
