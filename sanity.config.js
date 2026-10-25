// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import schemas from './schemas/schema'

export default defineConfig({
  title: "web-shop-cms",
  projectId: "37lcj78e",
  dataset: "products",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
