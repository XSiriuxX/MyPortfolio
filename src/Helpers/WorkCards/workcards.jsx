import "./workcards.css";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import imagen1 from "../../Extras/videogamesimage.png";

const WorkCards = () => {
  const works = [
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
      img: "imagen2",
      description: "descripcion",
      link: "link",
      git: "git",
    },
    {
      id: 3,
      name: "My Protfolio",
      img: "imagen3",
      description: "descripcion",
      link: "link",
      git: "git",
    },
  ];

  return (
    <div className="cards-container">
      {works.map((data) => {
        return (
          <div className="flip-card" data-aos="zoom-in" key={data.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{data.name}</p>
                <img className="card-image" src={data.img} />
              </div>
              <div className="flip-card-back">
                <p className="description">{data.description}</p>
                <div className="card-links">
                  <Link to={data.link}>
                    <RxExternalLink />
                    <p className="link-text">Demo</p>
                  </Link>
                  <Link to={data.git}>
                    <AiOutlineGithub />
                    <p className="link-text">Code</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default WorkCards;
