import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: "kg8ksp91",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-04-24",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
