import { Link } from "react-router-dom";
import { quizData } from "../data/quizData";
import SectionTitle from "../components/SectionTitle";
import "../pagesstyle/Skills.css";
export default function Skills() {
    const skills = Object.entries(quizData);
    return (
        <section className="skills">
            <div className="container">
                <SectionTitle title="Skills" subtitle="Click a skill to explore it and take an exam" />
                <div className="skills-grid">
                    {skills.map(([slug, s]) => (
                        <Link to={`/skills/${slug}`} key={slug} className="skill-card reveal">
                            <div className="skill-card-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.description.split(".")[0]}.</p>
                            <div className="skill-card-topics">
                                {s.topics.slice(0, 3).map((t) => <span key={t}>{t}</span>)}
                            </div>
                            <span className="skill-card-cta">Explore & take exam →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}