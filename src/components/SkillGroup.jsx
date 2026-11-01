import "../componentsstyle/SkillGroup.css";
export default function SkillGroup({ group, items }) {
    return (
        <div className="skill-group">
            <h3>{group}</h3>
            <div className="skill-items">
                {items.map((i) => <span key={i}>{i}</span>)}
            </div>
        </div>
    );
}