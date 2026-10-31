import { projects } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import "../pagesstyle/Projects.css";
export default function Projects() { return (<section className="projects"><SectionTitle title="Projects" subtitle="Things I've built" /><div className="projects-grid">{projects.map(p => <ProjectCard key={p.title} project={p} />)}</div></section>) }