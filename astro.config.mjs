import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://mobslicer152.github.io/astro-frontend-masters/',
  integrations: [tailwind(), react(), solidJs()]
});