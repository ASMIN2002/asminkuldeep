import { projects } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import "../pagesstyle/Projects.css";
export default function Projects() {
    return (
        <section className="projects">
            <SectionTitle title="Projects" subtitle="Things I've built" />
            <div className="projects-grid">
                {projects.map((p) => (
                    <div className="reveal" key={p.title}>
                        <ProjectCard project={p} />
                    </div>
                ))}
            </div>
        </section>
    );
}