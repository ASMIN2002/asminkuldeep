import { projects } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import "../pagesstyle/Projects.css";
export default function Projects() {
    return (
        <section className="projects">
            <div className="container">
                <SectionTitle title="Projects" subtitle="Things I've built — from live products to Java applications" />
                <div className="projects-grid">
                    {projects.map((p) => (
                        <div className="reveal" key={p.title}>
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}