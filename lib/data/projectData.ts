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
    num: "006",
    title: "Fetchr App",
    date: "2024",
    href: "/projects/fetchr",
    svgSrc: "/images/projectCard/fetchr.svg",
    featured: true,
  },
  {
    num: "005",
    title: "Linkedin Brand Kit",
    date: "2024",
    href: "/projects/linkedin",
    svgSrc: "/images/projectCard/linkedin.svg",
    featured: true,
  },
  {
    num: "004",
    title: "SearchNEU Alerts",
    date: "2024",
    href: "/projects/searchneu",
    svgSrc: "/images/projectCard/searchneu.svg",
    featured: true,
  },
  {
    num: "003",
    title: "ClubsNEU Database",
    date: "2023",
    href: "/projects/clubsneu",
    svgSrc: "/images/projectCard/clubsneu.svg",
    featured: true,
  },
  {
    num: "002",
    title: "Udemy Personal Plan",
    date: "2023",
    href: "/projects/udemy",
    svgSrc: "/images/projectCard/udemy.svg",
    featured: false,
  },
  {
    num: "001",
    title: "ReMo Mobile",
    date: "2023",
    href: "/projects/remo",
    svgSrc: "/images/projectCard/remo.svg",
    featured: false,
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
