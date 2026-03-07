import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  site: "https://spirit-media-portal.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: (await import("@astrojs/netlify")).default(),
});
