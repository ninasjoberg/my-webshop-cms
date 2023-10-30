// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
  title: "web-shop-cms",
  projectId: "37lcj78e",
  dataset: "products",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
