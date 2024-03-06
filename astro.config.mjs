import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://mobslicer152.github.io',
  base: '/astro-frontend-masters',
  trailingSlash: 'never',
  //output: 'hybrid', // github pages no work
  integrations: [tailwind(), react(), solidJs()]
});