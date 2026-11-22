import { nanoid } from "nanoid";
import jensaisquiz from "@/assets/jensaisquiz.webp";
import moguland from "@/assets/moguland.webp";
import yangtze from "@/assets/yangtze.webp";

export const links = [
  { id: nanoid(), href: "#projects", text: "Work" },
  { id: nanoid(), href: "#skills", text: "Stack" },
  { id: nanoid(), href: "#about", text: "About" },
];

// Keep this short: a few things per row, each one backed by a project or client site.
export const skillGroups = [
  { id: nanoid(), label: "Front end", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
  { id: nanoid(), label: "Back end & content", items: ["PostgreSQL", "Prisma", "WordPress", "Sanity"] },
  { id: nanoid(), label: "AI & workflow", items: ["OpenAI & Claude APIs", "MCP", "GitHub Actions", "Vitest"] },
];

export const alsoUsed = ["Python", "Docker", "AWS", "SQL"];

// Client work and the strongest apps get a full row with a screenshot.
// `compact: true` items are listed in a smaller "more" list without a screenshot.
// Leave `url` or `github` empty to hide that link (e.g. private repos, demos being fixed).
export const projects = [
  {
    id: nanoid(),
    img: moguland,
    url: "https://mogulandtechsolutions.ca",
    github: "",
    kind: "WordPress · client work",
    title: "Moguland Tech Solutions",
    text: "Company website for an Ottawa home and business security provider. Trilingual in English, French and Simplified Chinese, built on a custom WordPress theme and tested locally before each release.",
    tags: ["WordPress", "Custom theme", "Git", "LocalWP"],
  },
  {
    id: nanoid(),
    img: yangtze,
    url: "https://yangtzeottawa.ca",
    github: "",
    kind: "Next.js · client work",
    title: "YangTze Ottawa",
    text: "Responsive English and Chinese website for an Ottawa Chinese restaurant, with the restaurant story and careers and contact pages. It currently announces the restaurant's return to Chinatown.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Sanity"],
  },
  {
    id: nanoid(),
    img: jensaisquiz,
    phone: true,
    url: "",
    github: "https://github.com/yan00126/Je-Ne-Sais-Quiz",
    kind: "React Native · iPhone app",
    title: "Je Ne Sais Quiz",
    text: "A daily French study plan for the TCF Canada exam. It covers listening, reading, writing and speaking, reviews vocabulary with spaced repetition and keeps a log of mistakes. Everything is stored on the phone.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite"],
  },
  {
    id: nanoid(),
    compact: true,
    url: "https://yanfei.dev",
    github: "https://github.com/yan00126/WebDev-portfolio",
    title: "This site",
    text: "React and Tailwind, with a server-side AI assistant on a Netlify Function: rate limited, tested, and gated by CI before every deploy.",
  },
  {
    id: nanoid(),
    compact: true,
    url: "https://jobify-lovat.vercel.app",
    github: "https://github.com/yan00126/Jobify",
    title: "Jobify",
    text: "A job application tracker in Next.js with status filters and stats.",
  },
  {
    id: nanoid(),
    compact: true,
    url: "https://felixyan-backroads.netlify.app/",
    github: "https://github.com/yan00126/backroads-app",
    title: "Backroads",
    text: "A mock travel agency homepage in HTML, CSS and JavaScript.",
  },
  {
    id: nanoid(),
    compact: true,
    url: "https://unsplashfelix.netlify.app/",
    github: "https://github.com/yan00126/Netli-Unsplash",
    title: "Picture Search",
    text: "Search Unsplash for pictures of anything, with light and dark themes.",
  },
];
