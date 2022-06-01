---
setup: |
  import Layout from '../../../layouts/BlogPostLayout.astro'
  import FancyButton from '../../../components/FancyButton.tsx'
  import imgUrl from './colin-meg-TZdUSGwMcVc-unsplash.jpeg'
---

<FancyButton client:load />

# hello

this is a blog post
lsdkjflsjk

<img src={imgUrl} />

```js
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
```