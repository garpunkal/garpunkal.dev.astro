import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import robotsTxt from "astro-robots-txt";
import favicons from "astro-favicons";

export default defineConfig({
  site: 'https://garpunkal.dev',
  image: {
    service: squooshImageService(),
    domains: [
      "res.cloudinary.com",
      "cloud.squidex.io"
    ],
  },
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      sitemap: ['https://garpunkal.dev/sitemap-index.xml']
    }),
    favicons({
      masterPicture: "public/favicon.png",
      emitAssets: true,
      appName: "garpunkal.dev",
      appShortName: "garpunkal.dev",
      appDescription: "garpunkal.dev",
      lang: "en-GB",
      background: "#077da0",
      theme_color: "#077da0",
      faviconsDarkMode: false,
      manifestMaskable: true
    })]
});  