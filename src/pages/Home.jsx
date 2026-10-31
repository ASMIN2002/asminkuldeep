import { useEffect, useState } from "react";
import { personal } from "../data/content";
import Button from "../components/Button";
import profile from "../assets/AerodeckDP.png";
import "../pagesstyle/Home.css";
const roles = ["Java Full Stack Developer", "React Developer", "Spring Boot Enthusiast", "Problem Solver"];
export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        const current = roles[roleIndex];
        const speed = deleting ? 40 : 90;
        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(current.slice(0, text.length + 1));
                if (text === current) setTimeout(() => setDeleting(true), 1500);
            } else {
                setText(current.slice(0, text.length - 1));
                if (text === "") {
                    setDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [text, deleting, roleIndex]);
    return (
        <section className="home">
            <div className="home-content">
                <div className="home-image-wrap">
                    <img src={profile} alt={personal.name} className="home-image" />
                </div>
                <p className="home-greet">Hi, I'm</p>
                <h1 className="home-name">{personal.name}</h1>
                <h2 className="home-role">
                    <span className="typed">{text}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="home-tagline">{personal.tagline}</p>
                <div className="home-cta">
                    <Button to="/projects">View Projects</Button>
                    <Button to="/contact" variant="outline">Contact Me</Button>
                </div>
            </div>
            <a href="#about-preview" className="scroll-indicator" aria-label="Scroll down">↓</a>
        </section>
    );
}