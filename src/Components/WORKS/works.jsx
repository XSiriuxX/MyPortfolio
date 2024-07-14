import "./works.css";
import WorkCard from "../../Helpers/WorkCards/workcards";
import imagen1 from "../../Extras/videogamesimage.png";
import imagen2 from "../../Extras/rickandmorty.png";
import imagen3 from "../../Extras/portfolio.png";
import imagen4 from "../../Extras/pokedex.png";
import imagen5 from "../../Extras/glamourglow.png";

const Works = () => {
  const Projects = [
    {
      id: 1,
      name: "VideoGames API ",
      img: imagen1,
      description:
        "I created a Single Page Application (SPA) as an individual project for Henry, in which I implemented various development technologies such as: React, Redux, Express, Node.js, Sequelize, etc. This project was highly appreciated by Henry, and I am proud to have developed my acquired skills so effectively.",
      link: "https://pi-final.vercel.app/",
      git: "https://github.com/XSiriuxX/PI_FINAL",
    },
    {
      id: 2,
      name: "Rick and Morty API",
      img: imagen2,
      description:
        "RickAndMorty API Project: Crafted during my Henry bootcamp journey, this inaugural project epitomizes my full-stack skills. Seamlessly integrating frontend, backend, and database components, I harnessed the RickAndMorty API to create an immersive experience. Join me in celebrating this foundational achievement that marked the beginning of my coding odyssey.",
      link: "link",
      git: "https://github.com/XSiriuxX/RickandMorty",
    },
    {
      id: 3,
      name: "My PortFolio",
      img: imagen3,
      description:
        "I'm excited to showcase my latest projects and creations here. This dynamic platform serves as a hub for my upcoming endeavors, where I'll be sharing my innovative projects, designs, and ideas. Join me on this journey as I bring my visions to life, one project at a time.",
      link: "https://portfoliogiovanni-snowy.vercel.app/",
      git: "https://github.com/XSiriuxX/MyPortfolio",
    },
    {
      id: 4,
      name: "TypeScript PokeDex app",
      img: imagen4,
      description:
        "Is a project where I honed my skills in React and TypeScript. This app allows users to browse and search for Pokémon, displaying their details and information. Through this project, I gained hands-on experience in leveraging TypeScript's strong typing and React's component-based architecture to create a dynamic and responsive application for Pokémon enthusiasts.",
      link: "https://pokedex-react-ts-eight.vercel.app/",
      git: "https://github.com/XSiriuxX/Pokedex-React-TS",
    },
    {
      id: 5,
      name: "Glamour Glow Web",
      img: imagen5,
      description:
        "This project has been a true collaboration where we've merged our skills and creativity to create an exceptional online experience. From the visually stunning design to the seamless functionality, every detail has been carefully crafted to deliver the best in technology and style.",
      link: "https://glamour-glow.vercel.app/",
      git: "https://github.com/EderFornero/Glamour-Glow",
    },
  ];

  return (
    <div id="works" className="works">
      <div className="works-container">
        <div className="works-heading">
          <h3 className="works-title">Work & Projects</h3>
          <span className="works-divider" />
        </div>

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
