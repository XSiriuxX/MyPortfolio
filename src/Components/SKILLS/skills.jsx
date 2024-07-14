import ProgressBar from "../../Helpers/ProgressBar/progressbar";
import SkillBox from "../../Helpers/SkillBox/skillbox";
import "./skills.css";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiReact,
  SiHtml5,
  SiCss3,
  SiAngular,
} from "react-icons/si";

const skillslist1 = [
  { name: "JavaScript", img: SiJavascript, value: 90 },
  { name: "ReactJs", img: SiReact, value: 95 },
  { name: "Angular", img: SiAngular, value: 80 },
  { name: "NextJs", img: SiNextdotjs, value: 85 },
  { name: "HTML", img: SiHtml5, value: 95 },
  { name: "CSS", img: SiCss3, value: 90 },
  { name: "FIGMA", img: SiFigma, value: 80 },
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
          <h3 className="skills-title"> About My Work</h3>
          <span className="skills-divider" />
        </div>

        <div className="skills-content" data-aos="fade-up">
          <section className="descriptioncontainer">
            <div className="item">
              <p>
                As a Fullstack Developer with expertise in JavaScript and a
                background in Systems Engineering, I specialize in creating
                robust and dynamic web applications. I am dedicated to
                delivering high-quality solutions that not only meet technical
                requirements but also provide exceptional user experiences.
              </p>
            </div>
            <div className="item">
              <h3>Development Excellence</h3>
              <p>
                Efficient Coding, Fullstack Expertise & Innovative Solutions
              </p>
            </div>
            <div className="item">
              <h3>Technology Stack</h3>
              <p>JavaScript Mastery, Version Control & Database Management</p>
            </div>
            <div className="item">
              <h3>Agile Methodology</h3>
              <p>
                Collaborative Environment, Iterative Development & Efficient
                Workflows
              </p>
            </div>
            <div className="item">
              <h3>Client-Centric Approach</h3>
              <p>Understanding Needs, User Focus & Research and Testing</p>
            </div>
          </section>

          <section className="skillscontainer">
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
          </section>
        </div>

        <section className="skills-part3" data-aos="zoom-in">
          {skillslist2.map((skill) => {
            return (
              <SkillBox
                key={skill.name}
                logo={<skill.img />}
                name={skill.name}
                value={skill.value}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Skills;
