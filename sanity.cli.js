// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "37lcj78e",
    dataset: "products",
  },
  deployment: {
    appId: "1fc1daf60678ba8ef2f9d2bd",
  },
});
