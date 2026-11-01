import { useState } from "react";
import { personal } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import "../pagesstyle/Contact.css";
export default function Contact() {
    const [status, setStatus] = useState("idle");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const form = e.target;
        const data = new FormData(form);
        try {
            const res = await fetch(personal.formspree, { method: "POST", body: data, headers: { Accept: "application/json" } });
            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };
    const socials = [
        { label: "Email", href: `mailto:${personal.email}`, icon: <FaEnvelope />, cls: "social-email" },
        { label: "LinkedIn", href: personal.linkedin, icon: <FaLinkedin />, cls: "social-linkedin" },
        { label: "GitHub", href: personal.github, icon: <FaGithub />, cls: "social-github" },
        { label: "Instagram", href: personal.instagram, icon: <FaInstagram />, cls: "social-instagram" },
        { label: "Facebook", href: personal.facebook, icon: <FaFacebook />, cls: "social-facebook" },
        { label: "WhatsApp", href: `https://wa.me/91${personal.whatsapp}`, icon: <FaWhatsapp />, cls: "social-whatsapp" },
    ];
    return (
        <section className="contact">
            <div className="container">
                <SectionTitle title="Get In Touch" subtitle="Let's build something together" />
                <div className="contact-grid">
                    <form className="contact-form reveal" onSubmit={handleSubmit}>
                        <h3>Send a message</h3>
                        <div className="contact-row">
                            <input type="text" name="name" placeholder="Your name" required />
                            <input type="email" name="email" placeholder="Your email" required />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" required />
                        <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
                        <button type="submit" className="contact-btn" disabled={status === "sending"}>
                            {status === "sending" ? "Sending..." : <>Send Message <FaPaperPlane /></>}
                        </button>
                        {status === "success" && <p className="contact-status success">Message sent successfully! I'll get back to you soon.</p>}
                        {status === "error" && <p className="contact-status error">Something went wrong. Please try again or email me directly.</p>}
                    </form>
                    <div className="contact-side reveal">
                        <h3>Connect with me</h3>
                        <div className="social-list">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`social-item ${s.cls}`} aria-label={s.label} title={s.label}>
                                    <span className="social-icon">{s.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}