import "./Footer.scss";
import { about, header } from "../../shared/portfolio";

const Footer = () => (
  <footer className="footer">
    <a href={header?.homepage} className="link footer__link" target={"_blank"}>
      Created By {about?.name}
    </a>
  </footer>
);

export default Footer;
