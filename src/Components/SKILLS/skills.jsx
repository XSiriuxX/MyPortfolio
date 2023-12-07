import ProgressBar from "../../Helpers/ProgressBar/progressbar";
import SkillBox from "../../Helpers/SkillBox/skillbox";
import "./skills.css";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillslist1 = [
  { name: "JavaScript", img: SiJavascript, value: 90 },
  { name: "ReactJs", img: FaReact, value: 95 },
  { name: "Angular", img: IoLogoHtml5, value: 80 },
  { name: "NextJs", img: SiMongodb, value: 85 },
  { name: "HTML", img: IoLogoHtml5, value: 95 },
  { name: "CSS", img: IoLogoCss3, value: 90 },
];
const skillslist2 = [
  { name: "TypeScript", img: SiTypescript },
  { name: "PostgreSQL", img: SiPostgresql },
  { name: "MongoDB", img: SiMongodb },
  { name: "Express", img: SiExpress },
  { name: "Tailwind", img: SiTailwindcss },
  { name: "Redux", img: SiRedux },
];

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <h3 className="skills-title"> My Skills</h3>
          <span className="skills-divider" />
        </div>

        <p data-aos="fade-up" className="skills-description">
          Here are my skills.
        </p>
        <div className="skills-content">
          <div className="skills-side">
            <div data-aos="zoom-in" className="skills-progress">
              <div className="skills-progress-container">
                {skillslist1.map((skill) => {
                  return (
                    <ProgressBar
                      key={skill.name}
                      className="skills-progress-bar"
                      logo={<skill.img />}
                      name={skill.name}
                      value={skill.value}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="skills-side">
            <div className="skills-part2">
              {skillslist2.map((skill) => {
                return (
                  <SkillBox
                    key={skill.name}
                    className="skills-progress-bar"
                    logo={<skill.img />}
                    name={skill.name}
                    value={skill.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
