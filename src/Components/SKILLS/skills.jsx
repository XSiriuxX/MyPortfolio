import ProgressBar from "../../Helpers/ProgressBar/progressbar";
import SkillBox from "../../Helpers/SkillBox/skillbox";
import "./skills.css";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiExpress,
  SiRedux,
  SiSequelize,
  SiPostgresql,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        {/* heading */}
        <div className="skills-heading">
          <h3 className="skills-title"> My Skills</h3>
          <span className="skills-divider" />
        </div>

        {/*content*/}
        <p data-aos="fade-up" className="skills-description">
          Here are my skills.
        </p>
        <div className="skills-content">
          <div className="skills-left">
            <div data-aos="zoom-in" className="skills-progress">
              <div className="skills-progress-container">
                <ProgressBar
                  className="skills-progress-bar"
                  logo={<IoLogoHtml5 />}
                  name={"HTML"}
                  value={95}
                />
                <ProgressBar
                  className="skills-progress-bar"
                  logo={<IoLogoCss3 />}
                  name={"CSS"}
                  value={88}
                />
                <ProgressBar
                  className="skills-progress-bar"
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar
                  className="skills-progress-bar"
                  logo={<FaReact />}
                  name={"React Js"}
                  value={80}
                />
                <ProgressBar
                  className="skills-progress-bar"
                  logo={<SiRedux />}
                  name={"Redux"}
                  value={80}
                />
              </div>
            </div>
          </div>
          <div className="skills-right">
            <div className="skills-first2">
              <SkillBox
                className="skills-skill-box"
                logo={<IoLogoNodejs />}
                skill={"Node Js"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiSequelize />}
                skill={"Sequelize"}
              />
            </div>
            <div className="skills-last2">
              <SkillBox
                className="skills-skill-box"
                logo={<SiExpress />}
                skill={"Express Js"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiPostgresql />}
                skill={"Postgre SQL"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
