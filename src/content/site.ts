/**
 * ============================================================================
 * SITE CONFIGURATION - Edit this file to personalize your site!
 * ============================================================================
 *
 * This is the main configuration file. Change the values below to make
 * the site your own. All personal information is centralized here.
 */

export const siteConfig = {
  // -------------------------------------------------------------------------
  // BASIC INFO - Your name and site metadata
  // -------------------------------------------------------------------------
  name: "Your Name",
  title: "Your Name - Developer & Designer", // Shows in browser tab
  description: "Personal website and portfolio of Your Name - a developer passionate about building beautiful, functional experiences.",

  // -------------------------------------------------------------------------
  // HERO SECTION - The big intro on your homepage
  // -------------------------------------------------------------------------
  hero: {
    greeting: "Hi, I'm",
    headline: "Your Name",
    tagline: "I build thoughtful digital experiences",
    description: "I'm a developer and designer who loves creating things that live on the internet. Currently focused on building accessible, human-centered products.",
  },

  // -------------------------------------------------------------------------
  // ABOUT SECTION - Tell visitors about yourself
  // -------------------------------------------------------------------------
  about: {
    paragraphs: [
      "I'm a software developer based in [Your City]. I enjoy building things that make a difference, whether that's websites, applications, or anything in between.",
      "When I'm not coding, you can find me [your hobbies - reading, hiking, playing music, etc.]. I believe in continuous learning and love exploring new technologies.",
      "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
    ],
    // Skills/technologies you want to highlight
    skills: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "Python",
      "Node.js",
      "SQL & Databases",
      "Cloud Services (AWS/GCP)",
    ],
  },

  // -------------------------------------------------------------------------
  // SOCIAL LINKS - Your online presence
  // -------------------------------------------------------------------------
  social: {
    github: "https://github.com/mitchjohns97",
    linkedin: "https://linkedin.com/in/yourusername", // Update with your LinkedIn
    twitter: "", // Leave empty to hide
    email: "your.email@example.com", // Update with your email
  },

  // -------------------------------------------------------------------------
  // NAVIGATION - Menu items (you probably don't need to change this)
  // -------------------------------------------------------------------------
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
};

/**
 * ============================================================================
 * FEATURED PROJECTS - Projects shown on the homepage
 * ============================================================================
 *
 * These are highlighted on the homepage. For the full project list,
 * add markdown files to src/content/projects/
 *
 * Each project needs:
 * - title: Project name
 * - description: One-line summary
 * - slug: URL path (must match filename in src/content/projects/)
 * - tags: Technologies used
 * - featured: true to show on homepage
 */
export const featuredProjects = [
  {
    title: "Spotify Streaming Analyzer",
    description: "Analyze 13+ years of Spotify listening history with interactive visualizations, artist comparisons, and personalized insights.",
    slug: "spotify-analyzer",
    tags: ["Python", "Streamlit", "Pandas", "Altair"],
    image: "/images/projects/spotify-analyzer.png", // Add a screenshot here
    github: "https://github.com/mitchjohns97/claude_spotify",
    live: "https://claudespotify-4bqn2w3rarjln3pgyf3ipp.streamlit.app/",
    featured: true,
  },
  {
    title: "Project Two",
    description: "Another cool project you've built. Explain the problem it solves.",
    slug: "project-two",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    image: "/images/projects/project-two.png",
    github: "https://github.com/mitchjohns97/project-two",
    live: "",
    featured: false, // Set to true when you have a real project
  },
  {
    title: "Project Three",
    description: "A third project showcasing different skills or technologies.",
    slug: "project-three",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "/images/projects/project-three.png",
    github: "https://github.com/mitchjohns97/project-three",
    live: "",
    featured: false, // Set to true when you have a real project
  },
];

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
export type Project = typeof featuredProjects[number];
