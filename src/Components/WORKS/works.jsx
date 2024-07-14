import "./works.css";
import WorkCard from "../../Helpers/WorkCards/workcards";
import imagen1 from "../../Extras/videogamesimage.png";
import imagen2 from "../../Extras/rickandmorty.png";
import imagen3 from "../../Extras/portfolio.png";
import imagen4 from "../../Extras/glamourglow.png";
import imagen5 from "../../Extras/petsdesign.png";

const Works = () => {
  const Projects = [
    {
      id: 1,
      name: "VideoGames SPA ",
      img: imagen1,
      description:
        "I created a Single Page Application in which I implemented various development technologies such as: React, Redux, Express, Node.js, Sequelize, etc.",
      link: "https://pi-final.vercel.app/",
      git: "https://github.com/XSiriuxX/PI_FINAL",
    },
    {
      id: 2,
      name: "Rick and Morty SPA",
      img: imagen2,
      description:
        "Crafted during my Henry bootcamp journey, this inaugural project epitomizes my full-stack skills. Seamlessly integrating frontend, backend, and database components.",
      link: "link",
      git: "https://github.com/XSiriuxX/RickandMorty",
    },
    {
      id: 3,
      name: "My PortFolio",
      img: imagen3,
      description:
        "This dynamic platform serves as a hub for my upcoming endeavors, where I'll be sharing my innovative projects, designs, and ideas.",
      link: "https://portfoliogiovanni-snowy.vercel.app/",
      git: "https://github.com/XSiriuxX/MyPortfolio",
    },
    {
      id: 4,
      name: "Glamour Glow Web",
      img: imagen4,
      description:
        "This project has been a true collaboration where we've merged our skills and creativity to create an exceptional online experience. ",
      link: "https://glamour-glow.vercel.app/",
      git: "https://github.com/EderFornero/Glamour-Glow",
    },
    {
      id: 5,
      name: "Pets App Design",
      img: imagen5,
      description:
        "Pets is a UX and UI design project dedicated to facilitating the adoption of pets.I applied my des ign skills to create wireframes and prototypes.",
      link: "https://www.figma.com/design/S73jIGJYuikvxmxj2pnRBn/PETS?node-id=0-1&t=NiMQzjSkO8VAon2m-1",
      git: "#",
    },
  ];

  const Jobs = [
    {
      id: 1,
      name: "Programing Teacher Assistant | Academy Henry - Remote ",
      description:
        "Served as a Teacher Assistant at Henry, supporting a dynamic group of future full-stack developers during an enriching 2-month period. Facilitated a comfortable and friendly environment to foster teamwork development among students. Aptitudes: Teamwork, facilitation, Guidance and mentorship, Creating a positive learning environment, Empowering students in their educational journey.",
      date: "Jul. 2023 – Sep. 2023",
    },
    {
      id: 1,
      name: "Systems Analyst (ERP)| Restaurant La Frutita E.I.R.L – Ica, Perú",
      description:
        "As a Systems Analyst at La Frutita in Ica, Peru, I have been leading the management of the ERP, overseeing logistics, storage, and procedures since January 2024. I configure and customize the ERP, ensuring its alignment with the restaurant's operational objectives. I provide training and technical support to employees to optimize system usage.  ",
      date: "Jan. 2024 – Present",
    },
  ];

  return (
    <div id="works" className="works">
      <div className="works-container">
        <div className="works-heading">
          <h3 className="works-title">Work & Projects</h3>
          <span className="works-divider" />
        </div>

        <section className="first">
          {Jobs.reverse().map((data) => {
            return (
              <div key={data.id} className="job">
                <h3>
                  <span>{data.name}</span>
                  <span>{data.date}</span>
                </h3>

                <p>{data.description}</p>
              </div>
            );
          })}
        </section>

        <section className="works-content">
          {Projects.reverse().map((data) => {
            return (
              <WorkCard
                key={data.id}
                name={data.name}
                img={data.img}
                description={data.description}
                link={data.link}
                git={data.git}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Works;
