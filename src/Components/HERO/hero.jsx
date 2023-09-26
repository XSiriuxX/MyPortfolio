import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./hero.css";
import Resume from "../../Extras/giovanni_cespedes_cv.pdf";

const Hero = () => {
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
              "",
            ]}
            speed={30}
            wrapper="h1"
            repeat={Infinity}
            className="Text"
          />

          <p data-aos="fade-up" className="description">
            I&apos;m a Junior FullStack Developer, graduated from &quot;Soy
            Henry&quot;
          </p>

          <div data-aos="fade-up" className="buttons">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/giovannicespedes/"
            >
              <span> Hire Me</span>
            </a>
            <a href={Resume} download>
              <div>
                Resume <FiDownload />
              </div>
            </a>
          </div>

          <div className="icons flex mt-5">
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
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img
              data-aos="fade-up"
              src="https://media.licdn.com/dms/image/D4E03AQHW0nCVPUrptw/profile-displayphoto-shrink_800_800/0/1693190040220?e=1701302400&v=beta&t=8oJKiVDSXIknAzACrHPbr4ezQBBGxw8ik_dkT6ixZWI"
              alt="me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
