import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import coffehour from "./vendor/integration";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
    coffehour({
      config: "./src/config.yaml",
    }),
  ],
  site: "https://vbartalis.github.io",
  base: "/coffee-hour",
  vite: {
    resolve: {
      alias: {
        "~": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
