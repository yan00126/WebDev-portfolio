import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTypescript } from "react-icons/si";
import jobifyscreenshot from "@/assets/jobifyscreenshot.webp";
import storeshomescreen from "@/assets/storeshomescreen.webp";
import mealmate from "@/assets/mealmate.webp";
import moguland from "@/assets/moguland.webp";
import yangtze from "@/assets/yangtze.webp";

export const links = [
  { id: nanoid(), href: "#projects", text: "Work" },
  { id: nanoid(), href: "#skills", text: "Stack" },
  { id: nanoid(), href: "#about", text: "About" },
];

const iconClass = "h-8 w-8 text-accent";

export const skills = [
  {
    id: nanoid(),
    title: "Next.js",
    level: "Daily",
    icon: <SiNextdotjs className={iconClass} />,
    text: "Server-side rendering, routing and API routes for fast, maintainable apps.",
  },
  {
    id: nanoid(),
    title: "React",
    level: "Daily",
    icon: <FaReact className={iconClass} />,
    text: "Component-based front ends with a focus on clean, reusable structure.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    level: "Daily",
    icon: <SiTypescript className={iconClass} />,
    text: "Static types on top of JavaScript to catch mistakes early.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    level: "Solid",
    icon: <FaJs className={iconClass} />,
    text: "Interactive, dynamic web apps with smooth user interactions.",
  },
  {
    id: nanoid(),
    title: "HTML & CSS",
    level: "Solid",
    icon: <FaHtml5 className={iconClass} />,
    text: "Responsive, accessible layouts that work on any screen.",
  },
  {
    id: nanoid(),
    title: "Python & MySQL",
    level: "Working",
    icon: <FaPython className={iconClass} />,
    text: "Automation scripts, schema design and SQL queries, connected with mysql-connector-python.",
  },
];

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
    img: jobifyscreenshot,
    url: "https://jobify-lovat.vercel.app",
    github: "https://github.com/yan00126/Jobify",
    kind: "Next.js · dashboard",
    title: "Jobify",
    text: "A job application tracker that keeps every application organized from saved to offer, with status filters and stats.",
    tags: ["Next.js", "TypeScript", "Prisma", "Clerk"],
  },
  {
    id: nanoid(),
    img: mealmate,
    url: "https://mealmate-felix-yan.vercel.app/",
    github: "https://github.com/yan00126/Meal-Mate",
    kind: "Next.js · planner",
    title: "Meal Mate",
    text: "Discover recipes, save them to a personal collection and plan the week's meals.",
    tags: ["Next.js", "TypeScript", "Supabase", "Prisma"],
  },
  {
    id: nanoid(),
    img: storeshomescreen,
    url: "",
    github: "https://github.com/yan00126/template-store",
    kind: "Next.js · e-commerce",
    title: "A Simple Store",
    text: "An online shop with product browsing and a clear path to checkout.",
    tags: ["Next.js", "TypeScript"],
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
