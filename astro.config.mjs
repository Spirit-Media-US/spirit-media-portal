import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  site: "https://spirit-media-portal.netlify.app",
  server: { port: 4326, host: true },
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: (await import("@astrojs/netlify")).default(),
});
