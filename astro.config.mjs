// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // =========================================================================
  // GITHUB PAGES CONFIGURATION
  // =========================================================================
  // For GitHub Pages deployment, update these settings:
  //
  // Option 1: User/Organization site (username.github.io)
  //   site: 'https://username.github.io',
  //
  // Option 2: Project site (username.github.io/repo-name)
  //   site: 'https://username.github.io',
  //   base: '/repo-name',
  //
  // Option 3: Custom domain (after purchasing)
  //   site: 'https://yourdomain.com',
  // =========================================================================
  site: 'https://mitchjohns97.github.io',
  base: '/personal-site',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
