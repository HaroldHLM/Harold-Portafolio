import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "SaaS",
    stack: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Docker",
    ],
    github: "https://github.com/HaroldHLM/educore",
    demo: "https://ecommercess-demo.vercel.app",
    image: "/image/projects/SaaS/image1.png",
    featured: true,
  },
  {
    id: "E-Commerce",
    stack: [
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Testing",
      "Github Actions",
    ],
    github: "https://github.com/codeableorg/fullstock-frontend",
    demo: "https://tasksss-demo.vercel.app",
    image: "/image/projects/E-Commerce/image.png",
  },
];
