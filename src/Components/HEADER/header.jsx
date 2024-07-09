import "./header.css";
import ParticleBackground from "../PARTICLE/particle";

const Header = () => {
  return (
    <header>
      <ParticleBackground id="particles" />
      <div className="info-text">
        <h1>AsmrProg</h1>
        <h3>Web Coding Youtube Channel With Big Community</h3>
        <a href="#home" className="scroll">
          <box-icon type="solid" name="down-arrow"></box-icon>
        </a>
      </div>
    </header>
  );
};

export default Header;
