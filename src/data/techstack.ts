export interface TechCategory {
  category: string;
  techs: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    techs: ["React"],
  },
  {
    category: "Backend",
    techs: ["Spring Boot", "Python", "Node.js"],
  },
  {
    category: "Database",
    techs: ["MariaDB", "PostgreSQL"],
  },
  {
    category: "Infra",
    techs: ["Docker"],
  },
];
