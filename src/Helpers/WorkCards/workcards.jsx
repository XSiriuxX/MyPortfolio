import "./workcards.css";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";

const WorkCard = ({ name, description, link, git, img }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>{name}</h2>
          <img src={img} />
        </div>

        <div className="flip-card-back">
          <div className="card-links">
            <a href={link}>
              <RxExternalLink />
              <p className="link-text">Demo</p>
            </a>
            <a href={git}>
              <AiOutlineGithub />
              <p className="link-text">Code</p>
            </a>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
