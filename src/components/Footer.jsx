import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../UI/socialMedia/SocialMedia";

const Footer = ({ year }) => {
  return (
    <>
      <footer className="text-white absolute bottom-0 w-full text-center flex justify-center items-center my-3">
        <ul>
          <div className="flex justify-center items-center my-1">
            <SocialMedia
              icon={faGithub}
              url={"https://github.com/DiegoEMartinezZ"}
            />
            <SocialMedia
              icon={faLinkedin}
              url={"https://www.linkedin.com/in/diegomz/"}
            />
            <SocialMedia
              icon={faBehance}
              url={"https://www.behance.net/lowoncyan_"}
            />
          </div>
          <h1 className="text-xs font-light">Diego Martínez - {year}</h1>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
