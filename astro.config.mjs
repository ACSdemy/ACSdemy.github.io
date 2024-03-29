import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax"

// https://astro.build/config
export default defineConfig({
  site: 'https://ACSdemy.github.io',
  markdown: {
    remarkPlugins: [ remarkMath ],
    rehypePlugins: [ rehypeMathjax ],
  },
  integrations: [ mdx() ]
});