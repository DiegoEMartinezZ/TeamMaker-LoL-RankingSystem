import MainTitle from "../components/MainTitle";
import Searchplayer from "../components/SearchPlayer";
import BtnRestartSelection from "../UI/buttons/BtnRestartSelection";
import InputTeamName from "../UI/text/InputTeamName";
import TitleSection from "../UI/text/TitleSection";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import BtnRankTeam from "../UI/buttons/BtnRankTeam";

const Home = () => {
  return (
    <>
      <section className="relative pt-8 flex-col items-center justify-center h-screen bg-black ">
        <MainTitle />
        <div className="flex-col relative mx-5 mt-5">
          <TitleSection text="Search yout teammates (0/5)" />
          <Searchplayer position={1} />
          <Searchplayer position={2} />
          <Searchplayer position={3} />
          <Searchplayer position={4} />
          <Searchplayer position={5} />
          <div className="flex justify-center items-center">
            <BtnRestartSelection />
          </div>
          <section className="mt-5 flex justify-center items-center">
            <InputTeamName />
            <BtnRankTeam
              icon={faChartSimple}
              text={"Rank Team!"}
              page={"/teamRank"}
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
