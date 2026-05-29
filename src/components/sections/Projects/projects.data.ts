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
    image: "/image/projects/image1.png",
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
    image: "/image/projects/image.png",
  },
  //   {
  //     id: "blog-cms",
  //     stack: ["Next.js", "PostgreSQL", "MDX"],
  //     github: "https://github.com/tuusuario/blog-cms",
  //     demo: "https://blogss-demo.vercel.app",
  //     image: "/image/projects/image3.png",
  //   },
  //   {
  //     id: "finance-dashboard",
  //     stack: ["React", "Node.js", "PostgreSQL", "Recharts"],
  //     github: "https://github.com/tuusuario/finance",
  //     demo: "https://finance-ssdemo.vercel.app",
  //     image: "/image/projects/image4.png",
  //   },
];
