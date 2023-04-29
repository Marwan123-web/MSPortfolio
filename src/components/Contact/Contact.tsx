import { contact } from "../../shared/portfolio";
import Button from "../Shared/Button";
import "./Contact.scss";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <Button label="Email me" classes="btn btn--outline" type="button" />
      </a>
    </section>
  );
};

export default Contact;
