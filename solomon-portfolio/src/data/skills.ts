import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js", color: "#000000" },
      { name: "React.js", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", color: "#3776AB" },
      { name: "Django", color: "#092E20" },
      { name: "Node.js", color: "#339933" },
      { name: "Express.js", color: "#68A063" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MySQL", color: "#4479A1" },
      { name: "SQLite", color: "#003B57" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#181717" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Postman", color: "#FF6C37" },
    ],
  },
];
