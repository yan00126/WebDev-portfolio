import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTypescript } from "react-icons/si";
import jobifyscreenshot from "@/assets/jobifyscreenshot.webp";
import storeshomescreen from "@/assets/storeshomescreen.webp";
import mealmate from "@/assets/mealmate.webp";
import backroads from "@/assets/backroads.webp";
import picsearch from "@/assets/picsearch.webp";

export const links = [
  { id: nanoid(), href: "#projects", text: "Work" },
  { id: nanoid(), href: "#ai-lab", text: "AI Lab" },
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

export const projects = [
  {
    id: nanoid(),
    img: storeshomescreen,
    url: "https://template-store-umber.vercel.app/",
    github: "https://github.com/yan00126",
    kind: "Next.js · e-commerce",
    title: "A Simple Store",
    text: "An online shop with product browsing and a clear path to checkout.",
    tags: ["Next.js", "React", "Vercel"],
  },
  {
    id: nanoid(),
    img: jobifyscreenshot,
    url: "https://jobify-b7oeh1fcd-fei-yans-projects.vercel.app/",
    github: "https://github.com/yan00126",
    kind: "Next.js · dashboard",
    title: "Jobify",
    text: "A job application tracker that keeps every application organized from saved to offer.",
    tags: ["Next.js", "TypeScript", "Vercel"],
  },
  {
    id: nanoid(),
    img: mealmate,
    url: "https://mealmate-felix-yan.vercel.app/",
    github: "https://github.com/yan00126",
    kind: "Next.js · planner",
    title: "Meal Mate",
    text: "Browse recipes, plan the week's meals and keep a personal recipe collection.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    id: nanoid(),
    img: backroads,
    url: "https://felixyan-backroads.netlify.app/",
    github: "https://github.com/yan00126",
    kind: "HTML & CSS · landing page",
    title: "Backroads",
    text: "A mock homepage for a travel agency, built to practice layout and responsive design.",
    tags: ["HTML", "CSS", "Netlify"],
  },
  {
    id: nanoid(),
    img: picsearch,
    url: "https://unsplashfelix.netlify.app/",
    github: "https://github.com/yan00126",
    kind: "React · API",
    title: "Picture Search",
    text: "Search Unsplash for pictures of anything, with a light and dark theme.",
    tags: ["React", "Unsplash API", "Netlify"],
  },
];

export const experiments = [
  {
    id: nanoid(),
    status: "live",
    title: "Chat with Fei",
    text: "An assistant that answers questions about my skills, projects and how we could work together, built on a Hugging Face Space.",
    tags: ["Chat", "Gradio", "Hugging Face"],
    href: "#about",
    cta: "Try it below",
  },
  {
    id: nanoid(),
    status: "planned",
    title: "Job match for Jobify",
    text: "Paste a job post and see which of the required skills match a résumé, with a short list of gaps.",
    tags: ["Extraction", "Structured output"],
  },
  {
    id: nanoid(),
    status: "planned",
    title: "Recipe remix for Meal Mate",
    text: "Turn the ingredients you already have into a meal plan and a shopping list that skips them.",
    tags: ["Generation", "Constraints"],
  },
];
