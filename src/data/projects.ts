import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-app.vercel.app",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather conditions and forecasts for any location worldwide with interactive maps and detailed analytics.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard-react.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
  },
];
