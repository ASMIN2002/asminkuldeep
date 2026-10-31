import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./root/Root";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const SkillDetails = lazy(() => import("./pages/SkillDetails"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
export default function App() {
    return (
        <Suspense fallback={<div className="loader">Loading…</div>}>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="skills/:skillSlug" element={<SkillDetails />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    );
}