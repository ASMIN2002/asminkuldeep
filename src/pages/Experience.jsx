import { experience, certifications } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import { FaBriefcase, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import "../pagesstyle/Experience.css";
export default function Experience() {
    return (
        <section className="experience">
            <div className="container">
                <SectionTitle title="Experience" subtitle="Where I've worked and learned" />
                <div className="exp-timeline">
                    {experience.map((e) => (
                        <div key={e.role} className="exp-card reveal">
                            <div className="exp-icon"><FaBriefcase /></div>
                            <div className="exp-body">
                                <div className="exp-head">
                                    <h3>{e.role}</h3>
                                    <span className="exp-period">{e.period}</span>
                                </div>
                                <p className="exp-org">{e.org}</p>
                                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                                {e.link && (
                                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="exp-link">
                                        {e.linkLabel} <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <SectionTitle title="Certifications" subtitle="Continuous learning" />
                <div className="cert-grid">
                    {certifications.map((c) => (
                        <div key={c.title} className="cert-card reveal">
                            <div className="cert-icon"><FaCertificate /></div>
                            <h4>{c.title}</h4>
                            <p>{c.org}</p>
                            <span className="cert-year">{c.year}</span>
                            {c.link && (
                                <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                    {c.linkLabel} <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}