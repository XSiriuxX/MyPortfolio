import "./fotter.css";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

const Fotter = () => {
  return (
    <div id="fotter" className="fotter">
      <div className="fotter-container">
        <h2 data-aos="zoom-out"> Let&apos;s Talk</h2>
        <a
          rel="noreferrer"
          target="_blank"
          data-aos="fade-in"
          href="https://www.linkedin.com/in/giovannicespedes/"
        >
          <FaLinkedinIn />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          data-aos="fade-in"
          href="https://www.linkedin.com/in/giovannicespedes/"
        >
          <IoLogoWhatsapp />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          data-aos="fade-in"
          href="https://www.linkedin.com/in/giovannicespedes/"
        >
          <RiInstagramFill />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          data-aos="fade-in"
          href="https://github.com/XSiriuxX"
        >
          <AiFillGithub />
        </a>
        <div data-aos="fade-in" className="copyright">
          | Copyright &copy; <span>2023 Siriux&apos;s Protfolio </span> All
          rights reserved |
        </div>
      </div>
    </div>
  );
};

export default Fotter;
