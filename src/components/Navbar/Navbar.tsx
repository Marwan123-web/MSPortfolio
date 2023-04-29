import { useContext, useState } from "react";
import { projects, skills, contact } from "../../shared/portfolio";
import "./Navbar.scss";

import MenuIcon from "../../assets/images/menu-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import IconImg from "../Shared/IconImg";
import Button from "../Shared/Button";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul className={"nav__list " + (showNavList ? "d-flex" : "")}>
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <Button
        type="button"
        ButtonFun={toggleNavList}
        classes="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? (
          <IconImg src={CloseIcon} alt={"CloseIcon"} />
        ) : (
          <IconImg src={MenuIcon} alt={"MenuIcon"} />
        )}
      </Button>
    </nav>
  );
};

export default Navbar;
