import { personal, summary, education, languages, achievements, locationMap } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import profile from "../assets/Asmin2.jpeg";
import manku from "../assets/Asmin3.png";
import "../pagesstyle/About.css";
export default function About() {
    return (
        <section className="about">
            <div className="container">
                <SectionTitle title="About Me" subtitle="A quick look at who I am" />
                <div className="about-hero reveal">
                    <div className="about-hero-img">
                        <img src={manku} alt={personal.name} />
                    </div>
                    <div className="about-hero-text">
                        <p className="about-hello">Hello, I'm</p>
                        <h2>{personal.name}</h2>
                        <p className="about-hero-role">{personal.role}</p>
                        <p className="about-location-link">
                            <a href={locationMap} target="_blank" rel="noopener noreferrer">
                                📍 {personal.location} — 756019
                            </a>
                        </p>
                    </div>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <div className="about-profile">
                            <img src={profile} alt={personal.name} className="about-profile-img" />
                            <div>
                                <h3>{personal.name}</h3>
                                <p className="about-role">{personal.role}</p>
                            </div>
                        </div>
                        <p>{summary}</p>
                        <p className="about-location">📍 {personal.location}</p>
                        <div className="about-langs"><strong>Languages:</strong> {languages.join(", ")}</div>
                    </div>
                    <div className="about-side">
                        <div className="about-card reveal">
                            <h3>🏆 Achievements</h3>
                            {achievements.map((a) => (
                                <div key={a.title} className="achievement-item">
                                    <p>{a.title} — {a.org} ({a.year})</p>
                                    <a href={a.link} target="_blank" rel="noopener noreferrer" className="about-visit">Visit →</a>
                                </div>
                            ))}
                        </div>
                        <div className="about-card reveal">
                            <h3>🎓 Education</h3>
                            {education.map((e) => (
                                <div key={e.degree} className="edu-item">
                                    <strong>{e.degree}</strong>
                                    <span>{e.org}</span>
                                    <small>{e.period}</small>
                                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="about-visit">Visit →</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}