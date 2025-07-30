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
    title: "Todo App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    githubUrl: "https://github.com/mg876007/todo-app",
    liveUrl: "https://mg876007.github.io/todo-app",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A modern, responsive weather web application built with React that displays current weather information for any city using the OpenWeatherMap API. Features include temperature, humidity, wind speed, and weather icons.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    technologies: ["React", "CSS3", "OpenWeatherMap API", "Fetch API"],
    githubUrl: "https://github.com/mg876007/weather-app",
    liveUrl: "https://mg876007.github.io/weather-app",
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
