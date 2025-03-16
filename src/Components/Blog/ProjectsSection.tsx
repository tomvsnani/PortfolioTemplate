import { ProjectOptions } from "../../Customize/ProjectOptions";

const Project = (props: ProjectOptions) => {
  return (
    <div className="card rounded">
      <iframe
        className="w-100 card-img-top"
        height="315"
        src={props.projectDemoUrl}
        title="YouTube video player"
        allow=""
      ></iframe>
      <div className="card-body">
        <div className="card-title h5">{props.projectName}</div>
        <div>{props.projectDescription}</div>
        <div>Technologies: {props.projectTechStack.join(", ")}</div>
      </div>
    </div>
  );
};

const Projects = ({ projects }: { projects: ProjectOptions[] }) => {
  return (
    <div className="w-100">
      <h2>Projects</h2>
      {projects.map((project) => (
        <a
          href={project.projectLink}
          key={project.projectName}
          className="text-decoration-none mb-5 d-block"
        >
          <Project {...project} />
        </a>
      ))}
    </div>
  );
};

export default Projects;
