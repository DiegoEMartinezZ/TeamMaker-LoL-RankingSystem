import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../components/MainTitle";
import PlayerRanking from "../components/PlayerRanking";
import Ranking from "../components/Ranking";
import Stats from "../components/Stats";
import Winrate from "../components/Winrate";
import Navbar from "../UI/navbar/Navbar";
import Quote from "../UI/text/Quote";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const TeamRanking = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <Navbar />
        <MainTitle />
        <section className="flex-col justify-between mx-10">
          <div className="flex">
            <Ranking teamName={"BLD2 Gaming"} tier={"S"} />
            <section>
              <Winrate porcentage={"62.7%"} />
              <ul className="grid grid-cols-2 gap-4">
                <Stats data={"Total Kills"} info={"3310"} />
                <Stats data={"Total Deaths"} info={"250"} />
                <Stats data={"Maps Won"} info={"670"} />
                <Stats data={"Minions Killed"} info={"23745"} />
                <Stats data={"Wards Placed"} info={"1568"} />
                <Stats data={"Average Game"} info={"23:10"} />
              </ul>
            </section>
          </div>
          <PlayerRanking teamName={"BLD2 Gaming"} />
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default TeamRanking;
