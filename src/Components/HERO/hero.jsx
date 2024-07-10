import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaCopy,
  FaPlus,
  FaDownload,
} from "react-icons/fa";
import "./hero.css";
import Resume from "../../Extras/CV-GIOVANNICESPEDES-ENG.pdf";
import Foto from "../../Extras/foto1.png";

const Hero = () => {
  const email = "giovanni.cespedes@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copiado");
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  return (
    <div id="home" className="hero">
      <div className="hero-container">
        <div className="left" data-aos="fade-up">
          <h2>Hello, I am Giovanni Cespedes</h2>

          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Freelancer",
              2000,
              "Full Stack",
              2000,
              "Frontend Developer",
              2000,
            ]}
            speed={30}
            wrapper="h1"
            repeat={Infinity}
            className="Text"
          />

          <p data-aos="fade-up" className="description">
            <span>
              Systems Engineer and Full Stack Web Developer with a solid
              problem-solving foundation and extensive systems knowledge.
              Let&apos;s connect and explore the boundless opportunities where
              engineering meets web development! 🚀
            </span>
          </p>

          <div data-aos="fade-up" className="buttons">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/giovannicespedes/"
            >
              <span>Hire Me</span> <FaPlus />
            </a>
            <a href={Resume} download>
              <div>
                <span>Resume</span> <FaDownload />
              </div>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                copyToClipboard();
              }}
            >
              <span>Copy Email</span> <FaCopy />
            </a>
          </div>

          <div className="icons ">
            <ul data-aos="fade-up" data-aos-duration="1500">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/XSiriuxX"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/giovannicespedes/"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://wa.me/955804941"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="image">
            <img data-aos="fade-up" src={Foto} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
