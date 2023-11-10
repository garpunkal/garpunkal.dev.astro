import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: 'https://garpunkal.dev',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      sitemap: [
        'https://garpunkal.dev/sitemap-index.xml']
    }),
    favicons({
      masterPicture: "public/favicon.png",
      emitAssets: true,
      appName: "garpunkal.dev",
      appShortName: "garpunkal.dev",
      appDescription: "garpunkal.dev",
      lang: "en-GB",
      background: "#fff",
      theme_color: "#fff",
      faviconsDarkMode: false,
    })
  ]
});