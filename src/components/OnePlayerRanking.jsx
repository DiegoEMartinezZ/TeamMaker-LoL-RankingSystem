import Position from "./Position";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconToPage from "../UI/icons/IconToPage";
import OnePlayerName from "./OnePlayerName";
import OnePlayerWinrate from "./OnePlayerWinrate";
import OnePlayerGrade from "./OnePlayerGrade";

const OnePlayerRanking = ({ position, alias, playerName, winrateP, grade }) => {
  return (
    <>
      <li className="my-5 relative flex items-center justify-center">
        <section className="sm:mx-52 bg-white text-blue-900 border-4 w-full border-blue-900  mr-2 rounded-lg">
          <div>
            <ul className="py-2 text-left flex relative justify-around items-center">
              <Position rank={position} />
              <OnePlayerName alias={alias} player={playerName} />
              <OnePlayerWinrate winrate={winrateP} />
              <OnePlayerGrade grade={grade} />
              <IconToPage icon={faMagnifyingGlass} page={"/playerStats"} />
            </ul>
          </div>
        </section>
      </li>
    </>
  );
};

export default OnePlayerRanking;
