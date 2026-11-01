import { useEffect, useState } from "react";
import { personal, skills, projects } from "../data/content";
import Button from "../components/Button";
import profile from "../assets/Asmin2.jpeg";
import heepit from "../assets/Asmin1.jpeg";
import { FaJava, FaReact, FaLeaf, FaRocket } from "react-icons/fa";
import "../pagesstyle/Home.css";
const roles = ["Java Full Stack Developer", "React Developer", "Spring Boot Enthusiast", "Founder of HEEPIT"];
const marqueeItems = ["Java", "Spring Boot", "React.js", "JDBC", "MySQL", "MongoDB", "JavaScript", "Capacitor", "Netlify", "Python"];
const floats = [
    { label: "Java", icon: <FaJava />, cls: "home-float-1" },
    { label: "React", icon: <FaReact />, cls: "home-float-2" },
    { label: "Spring", icon: <FaLeaf />, cls: "home-float-3" },
    { label: "HEEPIT", icon: <FaRocket />, cls: "home-float-4" },
];
export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        const current = roles[roleIndex];
        const speed = deleting ? 45 : 85;
        const timeout = setTimeout(() => {
            if (!deleting) {
                if (text.length < current.length) setText(current.slice(0, text.length + 1));
                else setDeleting(true);
            } else {
                if (text.length > 0) setText(current.slice(0, text.length - 1));
                else {
                    setDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [text, deleting, roleIndex]);
    return (
        <>
            <section className="home">
                <div className="home-bg" aria-hidden="true">
                    <span className="orb orb-1" />
                    <span className="orb orb-2" />
                    <span className="orb orb-3" />
                </div>
                <div className="container">
                    <div className="home-grid">
                        <div className="home-left">
                            <p className="home-greet">Hi, I'm</p>
                            <h1 className="home-name">{personal.name}</h1>
                            <h2 className="home-role">
                                <span className="typed">{text}</span>
                                <span className="cursor">|</span>
                            </h2>
                            <div className="home-founder">
                                <span className="founder-badge">Founder of HEEPIT (2026)</span>
                                <div className="founder-circle">
                                    <img src={heepit} alt="HEEPIT" />
                                </div>
                            </div>
                            <p className="home-tagline">
                                Java Full Stack Developer building responsive, production-ready web experiences.
                                I craft end-to-end products — from Java + Spring Boot backends to polished React
                                interfaces — and I'm the founder of <strong>HEEPIT</strong>, a live e-commerce
                                platform deployed on Netlify.
                            </p>
                            <div className="home-cta">
                                <Button to="/projects">View Projects</Button>
                                <Button to="/contact" variant="outline">Contact Me</Button>
                            </div>
                            <div className="home-stats">
                                <div><strong>3+</strong><span>Projects</span></div>
                                <div><strong>3</strong><span>Certifications</span></div>
                                <div><strong>1</strong><span>Startup</span></div>
                            </div>
                        </div>
                        <div className="home-right">
                            <div className="home-image-ring">
                                <img src={profile} alt={personal.name} className="home-image" />
                            </div>
                            {floats.map((f) => (
                                <div key={f.label} className={`home-float ${f.cls}`}>
                                    <span className="home-float-icon">{f.icon}</span>
                                    {f.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="home-scroll">
                    <a href="#home-marquee">↓</a>
                </div>
            </section>
            <div className="container">
                <div className="home-marquee" id="home-marquee">
                    <div className="marquee-track">
                        {[...marqueeItems, ...marqueeItems].map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                </div>
            </div>
            <section className="home-about reveal">
                <div className="container home-about-inner">
                    <div className="home-about-text">
                        <h2>What I do</h2>
                        <p>
                            I build full-stack web applications — designing clean, responsive frontends in
                            React and wiring them to robust Java backends. My toolkit spans Core Java,
                            Advanced Java, JDBC, Spring Boot, MySQL, MongoDB and modern JavaScript.
                        </p>
                        <p>
                            Beyond code, I've taught computer science — mentoring students in Java, Python
                            and AI. That teaching background shapes how I write code: readable, documented
                            and built for real users.
                        </p>
                    </div>
                    <div className="home-about-cards">
                        {skills.slice(0, 3).map((s) => (
                            <div className="home-about-card" key={s.group}>
                                <h3>{s.group}</h3>
                                <p>{s.items.join(" · ")}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="home-featured reveal">
                <div className="container">
                    <h2>Featured Project</h2>
                    <div className="home-featured-card">
                        <div className="home-featured-img">
                            <img src={heepit} alt="HEEPIT" />
                        </div>
                        <div className="home-featured-body">
                            <span className="featured-tag">Live · 2026</span>
                            <h3>{projects[0].title}</h3>
                            <p>{projects[0].desc}</p>
                            <div className="home-featured-tech">
                                {projects[0].tech.map((t) => <span key={t}>{t}</span>)}
                            </div>
                            {projects[0].link && (
                                <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="home-featured-link">
                                    Visit HEEPIT →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-cta-final reveal">
                <div className="container">
                    <h2>Let's build something great.</h2>
                    <p>Have an idea or an opportunity? I'm open to full-stack roles and freelance work.</p>
                    <Button to="/contact">Get in touch</Button>
                </div>
            </section>
        </>
    );
}