# Personal Website

A clean, modern personal website built with Astro, React, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site will be available at `http://localhost:4321`

---

## How to Personalize This Site

### Step 1: Update Your Info

Edit **`src/content/site.ts`** - this is where all your personal information lives:

- Your name and headline
- About section text
- Skills list
- Social media links
- Featured projects

### Step 2: Add Your Projects

**Option A: Quick way** - Edit `featuredProjects` in `src/content/site.ts`

**Option B: Detailed project pages** - Create markdown files in `src/content/projects/`:
```
src/content/projects/
├── my-cool-project.md    → becomes /projects/my-cool-project
└── another-project.md    → becomes /projects/another-project
```

### Step 3: Write Blog Posts

Add markdown files to `src/content/blog/`:
```
src/content/blog/
├── hello-world.md        → becomes /blog/hello-world
└── my-first-tutorial.md  → becomes /blog/my-first-tutorial
```

### Step 4: Add Images

Place images in `public/images/`:
```
public/images/
├── projects/
│   └── my-project.png
└── blog/
    └── my-post-image.png
```

Reference them in your content as `/images/projects/my-project.png`

### Step 5: Customize Colors

Edit the color values in `src/styles/global.css` under the `@theme` section.

### Step 6: Update Favicon

Edit `public/favicon.svg` - change the letter to your initial.

---

## File Structure Overview

```
src/
├── content/
│   ├── site.ts          ← YOUR INFO GOES HERE
│   ├── blog/            ← Blog posts (markdown)
│   └── projects/        ← Project details (markdown)
├── components/          ← Reusable UI components
├── layouts/             ← Page templates
├── pages/               ← Site pages (auto-routed)
└── styles/
    └── global.css       ← Colors & design system

public/
├── images/              ← Your images
└── favicon.svg          ← Site icon
```

---

## Deploying to GitHub Pages

### 1. Create GitHub Repository

Push this project to a new GitHub repository.

### 2. Configure the Site URL

Edit `astro.config.mjs`:

```js
// For username.github.io (user site)
site: 'https://YOURUSERNAME.github.io',

// For username.github.io/repo-name (project site)
site: 'https://YOURUSERNAME.github.io',
base: '/repo-name',
```

### 3. Enable GitHub Pages

1. Go to your repo on GitHub
2. Settings → Pages
3. Under "Build and deployment", select **GitHub Actions**
4. Push a change to trigger the first deployment

### 4. (Optional) Add Custom Domain

1. Purchase a domain (Cloudflare, Namecheap, Porkbun)
2. Add a `CNAME` file to `public/` with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS at your registrar (point to GitHub Pages)
4. Update `site` in `astro.config.mjs`

---

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |

---

## Tech Stack

- **[Astro](https://astro.build)** - Static site framework
- **[React](https://react.dev)** - Interactive components
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[GitHub Pages](https://pages.github.com)** - Free hosting
