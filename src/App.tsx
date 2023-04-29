import "./App.scss";
import { useTranslation } from "react-i18next";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useSelector } from "react-redux";
function App() {
  const { t, i18n } = useTranslation("common");
  const theme = useSelector((state: any) => state.theme.value);

  return (
    <div id="top" className={`${theme} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
