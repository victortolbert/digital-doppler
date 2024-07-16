import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import alpinejs from "@astrojs/alpinejs";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tunnel from "astro-tunnel";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), alpinejs(), svelte(), db(), partytown(), tailwind(), sitemap(), react(), tunnel(), starlight({title: 'My delightful docs site'})],
  output: "server",
  adapter: netlify()
});
