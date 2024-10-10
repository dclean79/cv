import "./SkillListItem.scss";

interface SkillItemProps {
  name: string;
  points: number;
}

function SkillListItem({ name, points }: SkillItemProps) {
  return (
    <li>
      <div className="skill-item">
        <h5>{name}</h5>
        <div className="skill">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`element ${index < points ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default SkillListItem;
