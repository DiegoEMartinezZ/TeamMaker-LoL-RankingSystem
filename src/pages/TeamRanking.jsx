import MainTitle from "../components/MainTitle";
import PlayerRanking from "../components/PlayerRanking";
import Ranking from "../components/Ranking";
import Stats from "../components/Stats";
import Winrate from "../components/Winrate";
import Navbar from "../UI/navbar/Navbar";
import OnePlayerRanking from "../components/OnePlayerRanking";
import IconGoBack from "../UI/icons/IconGoBack";

const TeamRanking = () => {
  return (
    <>
      <div className="flex-col pt-8 absolute bottom-0 right-0 left-0 top-0 items-center justify-center h-fit bg-black">
        <IconGoBack page={"/"} />
        <MainTitle />
        <Navbar />
        <section className="flex-col items-center mx-1 justify-around">
          <div className="flex justify-center  ">
            <Ranking
              text={"BLD2 Gaming"}
              title={"General Ranking"}
              tier={"S"}
            />

            <section>
              <Winrate porcentage={"62.7%"} />
              <ul className="grid grid-cols-2 gap-5">
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
          <ul className="mx-5 flex-col justify-center">
            <OnePlayerRanking
              position={1}
              alias={"DemonKing"}
              playerName={"LowOnCYAN"}
              winrateP={"67.4%"}
              grade={"S"}
            />

            <OnePlayerRanking
              position={2}
              alias={"Little Demon"}
              playerName={"Bizmarcko"}
              winrateP={"57.3%"}
              grade={"S-"}
            />

            <OnePlayerRanking
              position={3}
              alias={"Killer supps"}
              playerName={"Leinad86"}
              winrateP={"54.2%"}
              grade={"A+"}
            />

            <OnePlayerRanking
              position={4}
              alias={"OTP Amumu"}
              playerName={"Eduardking"}
              winrateP={"48.1%"}
              grade={"B+"}
            />

            <OnePlayerRanking
              position={5}
              alias={"Perrita Solitaria"}
              playerName={"Caster16"}
              winrateP={"37.4%"}
              grade={"E"}
            />
          </ul>
        </section>
      </div>
    </>
  );
};

export default TeamRanking;
