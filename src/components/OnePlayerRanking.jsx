import Position from "./Position";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconToPage from "../UI/icons/IconToPage";
import OnePlayerName from "./OnePlayerName";
import OnePlayerWinrate from "./OnePlayerWinrate";
import OnePlayerGrade from "./OnePlayerGrade";

const OnePlayerRanking = ({ position, alias, playerName, winrateP, grade }) => {
  return (
    <>
      <li className="my-5 relative flex flex-nowrap items-center justify-between">
        <section className="bg-white text-blue-900 border-4 border-blue-900 w-full mr-2 rounded-lg">
          <div>
            <Position rank={position} />
            <ul className="py-2 text-left flex justify-between items-center">
              <OnePlayerName alias={alias} player={playerName} />
              <OnePlayerWinrate winrate={winrateP} />
              <OnePlayerGrade grade={grade} />
            </ul>
          </div>
        </section>
        <IconToPage icon={faMagnifyingGlass} page={"/playerStats"} />
      </li>
    </>
  );
};

export default OnePlayerRanking;
