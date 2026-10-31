import { skills } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import SkillGroup from "../components/SkillGroup";
import "../pagesstyle/Skills.css";
export default function Skills() {
    return (
        <section className="skills">
            <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
            <div className="skills-grid">
                {skills.map((s) => (
                    <div className="reveal" key={s.group}>
                        <SkillGroup group={s.group} items={s.items} />
                    </div>
                ))}
            </div>
        </section>
    );
}