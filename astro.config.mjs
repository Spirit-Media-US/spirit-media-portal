import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://portal.spiritmediapublishing.com",
  server: { port: 4326, host: true },
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: (await import("@astrojs/cloudflare")).default(),
});
