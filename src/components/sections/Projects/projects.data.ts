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
    modalSlides: [
      {
        image: "/image/projects/image1.png",
        caption: "Arquitectura inicial de la plataforma (simbólico)",
      },
      {
        image: "/image/projects/image.png",
        caption: "Flujo académico multi-tenant en progreso (simbólico)",
      },
      {
        image: "/image/projects/image1.png",
        caption:
          "Panel principal con analíticas y gestión de usuarios (simbólico)",
      },
    ],
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
    modalSlides: [
      {
        image: "/image/projects/image.png",
        caption: "Vista de catálogo y filtros de productos (simbólico)",
      },
      {
        image: "/image/projects/image1.png",
        caption: "Flujo de carrito y checkout integrado (simbólico)",
      },
      {
        image: "/image/projects/image.png",
        caption: "Cierre de compra con validaciones y testing (simbólico)",
      },
    ],
  },
];
