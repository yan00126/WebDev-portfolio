import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTypescript } from "react-icons/si";
import jobifyscreenshot from "@/assets/jobifyscreenshot.png";
import storeshomescreen from "@/assets/storeshomescreen.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next.JS",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in building web applications with Next.js, using its server-side rendering, routing, and API features to create fast and reliable user experiences. Comfortable working with Next.js to develop both simple and complex projects, focusing on maintainable code and efficient performance.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Python, using its clear syntax and versatility for web development, automation, and data analysis.",
  },
  {
    id: nanoid(),
    title: "MySql",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in using MySQL for managing relational databases, including designing schemas, writing SQL queries, and integrating MySQL with Python applications using the mysql-connector-python package. Skilled in establishing secure connections, handling data operations, and ensuring efficient data retrieval and storage",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "TypeScript is a strongly typed programming language that builds upon JavaScript by adding optional static type definitions. ",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: storeshomescreen,
    url: "https://template-store-umber.vercel.app/",
    github: "https://github.com/yan00126",
    title: "A Simple Store",
    text: "A NextJS based online shopping website ",
  },
  {
    id: nanoid(),
    img: jobifyscreenshot,
    url: "https://jobify-b7oeh1fcd-fei-yans-projects.vercel.app/",
    github: "https://github.com/yan00126",
    title: "Jobify",
    text: "A NextJS based Job Application Tracking App",
  },
  {
    id: nanoid(),
    img: "https://plus.unsplash.com/premium_photo-1734112181063-4b2328276910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1lYWwlMjBNYXRlfGVufDB8MHwwfHx8MA%3D%3D",
    url: "https://mealmate-felix-yan.vercel.app/",
    github: "https://github.com/yan00126",
    title: "Meal Mate",
    text: "Welcome to MealMate — your go-to companion for seamless meal planning and personalized recipe creation. ",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://felixyan-backroads.netlify.app/",
    github: "https://github.com/yan00126",
    title: "mock travel site homepage backroads app",
    text: "A mock homepage for travel agency website.",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://unsplashfelix.netlify.app/",
    github: "https://github.com/yan00126",
    title: "picture search",
    text: "Search Pictures of anything from Unsplash, Cats, Dogs.",
  },
];
