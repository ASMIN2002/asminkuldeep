import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navLinks, personal } from "../data/content";
import { FaRobot } from "react-icons/fa";
import logo from "../assets/Asmin2.jpeg";
import "../componentsstyle/Navbar.css";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const close = () => setOpen(false);
    const goAI = () => { setOpen(false); navigate("/ai"); };
    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="nav-logo" onClick={close}>
                    <img src={logo} alt="Asmin" className="nav-logo-img" />
                    <span>{personal.name.split(" ")[0]}</span>
                </Link>
                <button className="nav-ai-mobile" onClick={goAI} aria-label="AI Assistant">
                    <FaRobot />
                </button>
                <button className={`nav-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
                    <span /><span /><span />
                </button>
                <div className={`nav-links ${open ? "open" : ""}`}>
                    {navLinks.map((l) => (
                        <NavLink key={l.path} to={l.path} end={l.path === "/"} onClick={close} className={({ isActive }) => (isActive ? "active" : "")}>
                            {l.label}
                        </NavLink>
                    ))}
                    <NavLink to="/ai" onClick={close} className={({ isActive }) => `nav-ai-link ${isActive ? "active" : ""}`}>
                        <FaRobot /> AI
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}