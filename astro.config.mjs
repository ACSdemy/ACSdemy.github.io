import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [ mdx(), markdoc() ]
});