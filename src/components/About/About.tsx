import { about } from "../../shared/portfolio";
import "./About.scss";
import Button from "../Shared/Button";

import IconImg from "../Shared/IconImg";

import GitHubIcon from "../../assets/images/github-icon.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} target={"_blank"}>
            <Button label="Resume" classes="btn btn--outline" type="button" />
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <IconImg src={GitHubIcon} alt={"GitHubIcon"} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <IconImg src={LinkedInIcon} alt={"LinkedInIcon"} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
