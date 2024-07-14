import "./skillbox.css";

const SkillBox = ({ logo, name }) => {
  return (
    <div className="skill-box">
      <div className="logo-box">{logo}</div>
      <p className="skill-text">{name}</p>
    </div>
  );
};

export default SkillBox;
