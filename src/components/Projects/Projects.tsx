import { projects } from "../../shared/portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.scss";

export interface projectI {
  name: string;
  description: string;
  stack: Array<string>;
  sourceCode: string;
  livePreview: string;
}

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project: projectI, index: number) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
