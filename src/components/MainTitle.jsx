import Quote from "../UI/text/Quote";
import Subtitle from "../UI/text/Subtitle";
import Title from "../UI/text/Title";

const MainTitle = () => {
  return (
    <>
      <div className="text-center py-4">
        <Quote text={"Phase One"} />
        <Title text={"TeamMaker"} />
        <Subtitle text={"LoL Ranking System"} />
      </div>
    </>
  );
};

export default MainTitle;
