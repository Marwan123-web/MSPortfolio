import { useState } from "react";
import { projects, skills, contact } from "../../shared/portfolio";
import "./Navbar.scss";

import SunnyIcon from "../../assets/images/sunny-icon.svg";
import MoonIcon from "../../assets/images/moon-icon.svg";
import MenuIcon from "../../assets/images/menu-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import IconImg from "../Shared/IconImg";
import Button from "../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../../redux-toolkit/theme/slice";

const Navbar = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: any) => state.theme.value);

  const toggleTheme = () => {
    let newTheme = theme === "dark" ? "light" : "dark";
    dispatch(updateTheme(newTheme));
  };

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
        ButtonFun={toggleTheme}
        classes="btn btn--icon"
        aria-label="toggle theme"
      >
        {theme === "dark" ? (
          <IconImg
            src={SunnyIcon}
            alt={"SunnyIcon"}
            width="50px"
            height="50px"
          />
        ) : (
          <IconImg src={MoonIcon} alt={"MoonIcon"} width="50px" height="50px" />
        )}
      </Button>

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
