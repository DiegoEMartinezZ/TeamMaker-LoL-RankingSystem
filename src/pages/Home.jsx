import MainTitle from "../components/MainTitle";
import SearchPlayer from "../components/SearchPlayer";
import BtnRestartSelection from "../UI/buttons/BtnRestartSelection";
import InputTeamName from "../UI/text/InputTeamName";
import TitleSection from "../UI/text/TitleSection";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import BtnRankTeam from "../UI/buttons/BtnRankTeam";
import { useTeam } from "../components/context/TeamContext";
import AnimationTeam from "../components/animationTeam/AnimationTeam";
import BtnCreateTeam from "../UI/buttons/BtnCreateTeam";

const Home = () => {
  const { teamComplete, arraySummoners } = useTeam();

  return (
    <>
      <section className="absolute top-0 bottom-0 right-0 left-0 pt-8 flex-col items-center justify-center bg-black ">
        <MainTitle />
        <div className=" mx-5 mt-5">
          <TitleSection
            text={`${
              teamComplete ? "Team Complete!" : "Search your teammates (0/5)"
            }`}
          />

          <SearchPlayer position={1} />

          {arraySummoners.length == 5 && (
            <div
              className={`${
                teamComplete ? "hidden" : "inline-block"
              } flex justify-around items-center`}
            >
              <BtnRestartSelection />
              <BtnCreateTeam />
            </div>
          )}

          {teamComplete && (
            <div>
              <AnimationTeam />
              <section className="flex-col justify-center items-center text-center">
                <InputTeamName />
                <BtnRankTeam
                  icon={faChartSimple}
                  text={"Rank Team"}
                  page={"/teamRank"}
                />
              </section>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
