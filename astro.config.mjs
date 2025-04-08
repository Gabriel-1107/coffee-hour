import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
  site: "https://vbartalis.github.io",
  base: "/coffee-hour",
});
