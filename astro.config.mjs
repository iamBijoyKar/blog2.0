import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), svelte(), sitemap()],
  site: "https://iamBijoyKar.github.io",
  // base: "/blog2.0",
  output: "static",
  adapter: vercel(),
});
