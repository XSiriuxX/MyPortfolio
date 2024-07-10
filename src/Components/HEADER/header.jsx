import "./header.css";
import ParticleBackground from "../PARTICLE/particle";

const Header = () => {
  return (
    <header>
      <ParticleBackground id="particles" />
      <div className="info-text">
        <h1>My Portfolio</h1>
        <h3>Systems Enginner & Full Stack Developer </h3>
        <a href="#home" className="scroll">
          <box-icon type="solid" name="down-arrow" color="white"></box-icon>
        </a>
      </div>
    </header>
  );
};

export default Header;
