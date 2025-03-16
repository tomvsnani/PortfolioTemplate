interface ProjectOptions {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectTechStack: string[];
  projectDemoUrl: string;
}

const projects: ProjectOptions[] = [
  {
    projectName: "Portfolio Template",
    projectDescription: "A simple portfolio template using React and Vite",
    projectLink: "https://github.com/pramuraman/PortfolioTemplate",
    projectTechStack: ["React", "Vite"],
    projectDemoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",
  },
  {
    projectName: "Portfolio Template1",
    projectDescription: "A simple portfolio template using React and Vite",
    projectLink: "https://github.com/pramuraman/PortfolioTemplate",
    projectTechStack: ["React", "Vite"],
    projectDemoUrl: "https://www.dailymotion.com/video/x9g5ncs",
  },
];


export default projects;
export type {ProjectOptions}