import { useState } from "react";
import { FaExternalLinkAlt, FaLock, FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaMobileAlt, FaCloud, FaCode } from "react-icons/fa";
import "../componentsstyle/ProjectCard.css";
const techIcons = {
    Java: <FaJava />,
    "React.js": <FaReact />,
    JavaScript: <FaJs />,
    HTML5: <FaHtml5 />,
    CSS3: <FaCss3Alt />,
    Capacitor: <FaMobileAlt />,
    Netlify: <FaCloud />,
    JDBC: <FaDatabase />,
    MySQL: <FaDatabase />,
    MongoDB: <FaDatabase />,
};
export default function ProjectCard({ project }) {
    const [toast, setToast] = useState(false);
    const handleUnavailable = () => {
        setToast(true);
        setTimeout(() => setToast(false), 2500);
    };
    return (
        <article className={`project-card ${project.featured ? "featured" : ""}`}>
            {project.featured && <span className="project-featured-tag">★ Featured</span>}
            <div className="project-card-head">
                <div className="project-icon"><FaCode /></div>
                <div>
                    <h3>{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                </div>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
                {project.tech.map((t) => (
                    <span key={t}>{techIcons[t] || null}{t}</span>
                ))}
            </div>
            {project.available ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Visit Live <FaExternalLinkAlt />
                </a>
            ) : (
                <button className="project-link project-locked" onClick={handleUnavailable}>
                    View Project <FaLock />
                </button>
            )}
            {toast && <div className="project-toast">Project not available yet</div>}
        </article>
    );
}