import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../components/MainTitle";
import PlayerRanking from "../components/PlayerRanking";
import Ranking from "../components/Ranking";
import Stats from "../components/Stats";
import Winrate from "../components/Winrate";
import Navbar from "../UI/navbar/Navbar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Position from "../components/Position";

const TeamRanking = () => {
  return (
    <>
      <div className="flex-col absolute bottom-0 right-0 left-0 top-0 items-center justify-center h-auto bg-black">
        <MainTitle />
        <Navbar />
        <section className="flex-col items-center mx-2 justify-around">
          <div className="flex justify-center  ">
            <Ranking teamName={"BLD2 Gaming"} tier={"S"} />
            <section>
              <Winrate porcentage={"62.7%"} />
              <ul className="grid grid-cols-2 gap-2">
                <Stats data={"Total Kills"} info={"3310"} />
                <Stats data={"Total Deaths"} info={"250"} />
                <Stats data={"Maps Won"} info={"670"} />
                <Stats data={"Minions Killed"} info={"23745"} />
                <Stats data={"Wards Placed"} info={"1568"} />
                <Stats data={"Avg. Game"} info={"23:10"} />
              </ul>
            </section>
          </div>
          <PlayerRanking teamName={"BLD2 Gaming"} />
          <ul className="mx-5">
            <li className="my-3 flex flex-nowrap items-center justify-between">
              <section className="bg-white text-blue-900 border-4 border-blue-900 rounded-lg">
                <div>
                  <Position rank={1} />
                  <ul className="text-left flex justify-center items-center">
                    <li className="py-2">
                      <h1 className="text-sm font-bold mx-2">Demon </h1>
                      <h1>LowOnCYAN </h1>
                    </li>

                    <li className="py-2">
                      <h1 className="text-sm font-bold mx-2">Winrate</h1>
                      <h1> 67.5% </h1>
                    </li>

                    <li className=" py-2">
                      <h1 className="text-sm font-bold mx-2">Role</h1>
                      <h1> AD Carry </h1>
                    </li>

                    <li className="py-1">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-red-900 text-sm font-bold mx-2"
                      />
                    </li>
                  </ul>
                </div>
              </section>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default TeamRanking;
