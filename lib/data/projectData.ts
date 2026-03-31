export interface Project {
  num: string;
  projectName: string;
  title: string;
  type: string;
  date: string;
  href: string;
  svgSrc: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    num: "01",
    projectName: "Jiogames",
    title: "Improving Discovery & Play Flow in JioGames Cloud",
    type: "Concept",
    date: "2025",
    href: "/projects/jiogames",
    svgSrc: "/images/projectCard/jiogames.svg",
    featured: true,
  },
  {
    num: "02",
    projectName: "Linkedin",
    title: "Embedding Human Recommendations into Automated Hiring Pipelines",
    type: "Concept",
    date: "2025",
    href: "/projects/linkedin",
    svgSrc: "/images/projectCard/linkedin.svg",
    featured: true,
  },
  {
    num: "03",
    projectName: "ChatGPT",
    title: "Prompt Library for ChatGPT",
    type: "Concept",
    date: "2024",
    href: "/projects/chatgpt",
    svgSrc: "/images/projectCard/chatGPT.svg",
    featured: true,
  },
];

export const getFeaturedProjects = (): Record<string, Project[]> => {
  // Filter projects based on the featured property
  const featuredProjects = allProjects.filter((project) => project.featured);

  return featuredProjects.reduce(
    (acc, project) => {
      if (!acc[project.date]) {
        acc[project.date] = [];
      }
      acc[project.date].push(project);
      return acc;
    },
    {} as Record<string, Project[]>,
  );
};
