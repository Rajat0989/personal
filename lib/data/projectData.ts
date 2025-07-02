export interface Project {
  num: string;
  title: string;
  date: string;
  href: string;
  svgSrc: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    num: "001",
    title: "ChatGPT",
    date: "2025",
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
    {} as Record<string, Project[]>
  );
};
