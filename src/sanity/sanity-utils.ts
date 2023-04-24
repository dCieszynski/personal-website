import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kg8ksp91",
  dataset: "production",
  apiVersion: "2023-04-24",
});

export const getProjects = async () => {
  const projects = await client.fetch(`*[_type == "project"]{
    name,
    description,
    repository,
    live,
    "image": image.asset->url,
    "alt": image.alt
  }`);
  return projects;
};
