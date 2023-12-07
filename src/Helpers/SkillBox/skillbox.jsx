import "./skillbox.css";

const SkillBox = ({ logo, name }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="skill-box">
      <div className="logo-box">{logo}</div>
      <p className="skill-text">{name}</p>
    </div>
  );
};

export default SkillBox;
