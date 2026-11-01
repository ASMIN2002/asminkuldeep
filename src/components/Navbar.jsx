import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, personal } from "../data/content";
import logo from "../assets/Asmin2.jpeg";
import "../componentsstyle/Navbar.css";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="nav-logo" onClick={close}>
                    <img src={logo} alt="Asmin" className="nav-logo-img" />
                    <span>{personal.name.split(" ")[0]}</span>
                </Link>
                <button className={`nav-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
                    <span /><span /><span />
                </button>
                <div className={`nav-links ${open ? "open" : ""}`}>
                    {navLinks.map((l) => (
                        <NavLink key={l.path} to={l.path} end={l.path === "/"} onClick={close} className={({ isActive }) => (isActive ? "active" : "")}>
                            {l.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}