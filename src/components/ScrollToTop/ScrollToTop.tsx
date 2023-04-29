import { useEffect, useState } from "react";
import "./ScrollToTop.scss";
import IconImg from "../../components/Shared/IconImg";

import RedirectTop from "../../assets/images/redirect-top.svg";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <IconImg
          src={RedirectTop}
          alt={"RedirectTop"}
          width="50px"
          height="50px"
        />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
