import { screen, render } from "@testing-library/react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

const project = {
  name: "Paw",
  description: "Paw is a Tinder like app for adopting pets from animal shelters",
  repository: "",
  live: "",
  image: "",
  alt: "",
};

describe("ProjectCard component", () => {
  test("renders ProjectCard component", () => {
    render(
      <ProjectCard
        data={project}
        content={
          <>
            <ProjectCard.Header />
            <ProjectCard.Image />
            <ProjectCard.Description />
            <ProjectCard.Links />
          </>
        }
      />
    );
    expect(screen.getByText("Paw")).toBeInTheDocument();
    expect(screen.getByText("Paw is a Tinder like app for adopting pets from animal shelters")).toBeInTheDocument();
  });
});
