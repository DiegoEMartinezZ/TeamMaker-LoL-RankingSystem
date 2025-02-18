import Position from "./Position";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconToPage from "../UI/icons/IconToPage";
import OnePlayerName from "./OnePlayerName";
import OnePlayerWinrate from "./OnePlayerWinrate";
import OnePlayerRole from "./OnePlayerRole";

const OnePlayerRanking = ({ position, alias, playerName, winrateP, role }) => {
  return (
    <>
      <li className="my-5 relative flex flex-nowrap items-center justify-between">
        <section className="bg-white text-blue-900 border-4 border-blue-900 w-full mr-2 rounded-lg">
          <div>
            <Position rank={position} />
            <ul className="py-2 text-left flex justify-center items-center">
              <OnePlayerName alias={alias} player={playerName} />
              <OnePlayerWinrate winrate={winrateP} />
              <OnePlayerRole mainRole={role} />
            </ul>
          </div>
        </section>
        <IconToPage icon={faMagnifyingGlass} page={"/playerStats"} />
      </li>
    </>
  );
};

export default OnePlayerRanking;
