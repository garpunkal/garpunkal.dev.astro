import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import favicons from "astro-favicons";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://garpunkal.dev',
  prefetch: true,
  integrations: [tailwind(), sitemap(), robotsTxt({
    sitemap: ['https://garpunkal.dev/sitemap-index.xml']
  }), favicons({
    masterPicture: "public/favicon.png",
    emitAssets: true,
    appName: "garpunkal.dev",
    appShortName: "garpunkal.dev",
    appDescription: "garpunkal.dev",
    lang: "en-GB",
    background: "#fff",
    theme_color: "#fff",
    faviconsDarkMode: false
  })],
  output: "server",
  adapter: vercel()
});  