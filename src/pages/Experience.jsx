import { experience, certifications } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import "../pagesstyle/Experience.css";
export default function Experience() {
    return (
        <section className="experience">
            <SectionTitle title="Experience" subtitle="Where I've worked and learned" />
            <div className="exp-list">
                {experience.map((e) => (
                    <div key={e.role} className="exp-card reveal">
                        <div className="exp-head">
                            <h3>{e.role}</h3>
                            <span>{e.period}</span>
                        </div>
                        <p className="exp-org">{e.org}</p>
                        <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                ))}
            </div>
            <SectionTitle title="Certifications" subtitle="Continuous learning" />
            <div className="cert-grid">
                {certifications.map((c) => (
                    <div key={c.title} className="cert-card reveal">
                        <h4>{c.title}</h4>
                        <p>{c.org}</p>
                        <span>{c.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}