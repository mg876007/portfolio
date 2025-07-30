export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
} 