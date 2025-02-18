import MainTitle from "../components/MainTitle";
import Ranking from "../components/Ranking";
import Stats from "../components/Stats";
import Winrate from "../components/Winrate";
import PentagonChart from "../UI/graphs/PentagonChart";
import IconGoBack from "../UI/icons/IconGoBack";
import Navbar from "../UI/navbar/Navbar";

const PlayerStats = () => {
  return (
    <>
      <div className="flex-col absolute bottom-0 right-0 left-0 top-0 items-center justify-center h-full bg-black">
        <IconGoBack page={"/teamRank"} />
        <MainTitle />
        <Navbar />
        <section className="flex-col items-center mx-1 justify-around">
          <div className="flex justify-center  ">
            <Ranking text={"LowOnCYAN"} title={"General Stats"} tier={"S"} />
            <section>
              <Winrate porcentage={"62.7%"} />
              <ul className="grid grid-cols-2 gap-5">
                <Stats data={"Total Kills"} info={"331"} />
                <Stats data={"Total Deaths"} info={"25"} />
                <Stats data={"Maps Won"} info={"67"} />
                <Stats data={"Minions Killed"} info={"2374"} />
                <Stats data={"Wards Placed"} info={"156"} />
                <Stats data={"Avg. Game"} info={"18:45"} />
              </ul>
              <Stats data={"Main Role"} info={"AD Carry"} />
            </section>
          </div>
        </section>
        <div className="flex justify-center">
          <PentagonChart />
        </div>
      </div>
    </>
  );
};

export default PlayerStats;
