import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../UI/text/Title";
import Subtitle from "../UI/text/Subtitle";
import Quote from "../UI/text/Quote";
import BtnPages from "../UI/buttons/btnPages";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-center">
          <Quote text={"Phase One"} />
          <Title text={"TeamMaker"} />
          <Subtitle text={"LoL Ranking System"} />
          <BtnPages icon={faPlusCircle} page={"/home"} text={"Create"} />
        </div>
      </div>
      <Footer year={2025} />
    </>
  );
};

export default Landing;
