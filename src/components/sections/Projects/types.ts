export type ProjectModalSlide = {
  image?: string;
  caption: string;
};
export type Project = {
  id: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
  featured?: boolean;
  modalSlides?: ProjectModalSlide[];
};
