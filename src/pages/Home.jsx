import { personal } from "../data/content";
import Button from "../components/Button";
import "../pagesstyle/Home.css";
export default function Home() { return (<section className="home"><div className="home-content"><p className="home-greet">Hi, I'm</p><h1>{personal.name}</h1><h2>{personal.role}</h2><p className="home-tagline">{personal.tagline}</p><div className="home-cta"><Button to="/projects">View Projects</Button><Button to="/contact" variant="outline">Contact Me</Button></div></div></section>) }