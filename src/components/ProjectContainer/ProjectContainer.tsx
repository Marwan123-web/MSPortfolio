import "./ProjectContainer.scss";
import IconImg from "../../components/Shared/IconImg";

import GitHubIcon from "../../assets/images/github-icon.svg";
import RedirectIcon from "../../assets/images/redirect-icon.svg";
import { projectI } from "../Projects/Projects";

const ProjectContainer = ({ project }: { project: projectI }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project?.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item: string, index: number) => (
          <li key={index} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <IconImg src={GitHubIcon} alt={"GitHubIcon"} />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <IconImg src={RedirectIcon} alt={"RedirectIcon"} />
      </a>
    )}
  </div>
);

export default ProjectContainer;
