import { personal } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import "../pagesstyle/Contact.css";
export default function Contact() { return (<section className="contact"><SectionTitle title="Get In Touch" subtitle="Let's build something together" /><div className="contact-card"><p className="contact-text">Feel free to reach out via email or connect with me on social platforms.</p><div className="contact-links"><Button href={`mailto:${personal.email}`}>Email Me</Button><Button href={personal.github} variant="outline">GitHub</Button><Button href={personal.linkedin} variant="outline">LinkedIn</Button></div><p className="contact-email">{personal.email}</p></div></section>) }