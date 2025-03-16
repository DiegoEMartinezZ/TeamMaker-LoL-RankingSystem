import Label from "../UI/text/Label";
import Position from "./Position";
import LabelText from "../UI/text/LabelText";
import { useTeam } from "./context/TeamContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const SearchPlayer = ({ position }) => {
  const { teamComplete, submitSummoner, onChangeSummonerData, addSummoner } =
    useTeam();

  return (
    <>
      <form
        onSubmit={submitSummoner}
        className={`${
          teamComplete ? "hidden" : "inline-block"
        } flex my-6 relative justify-center items-center  bg-black rounded-xl`}
      >
        <div className=" bg-blue-900 relative p-2.5 px-2 text-sm rounded-bl-2xl text-left mx-2">
          <Position rank={position} />
          <Label text="Region" />
          <select
            name="region"
            onChange={onChangeSummonerData}
            value={addSummoner.region || ""}
            className="rounded-lg w-full"
          >
            <option value="" disabled>
              -
            </option>
            <option value="LAN">LAN</option>
            <option value="LAS">LAS</option>
            <option value="BR">BR</option>
            <option value="EUW">EUW</option>
            <option value="EUNE">EUNE</option>
          </select>
        </div>
        <div className="bg-white p-2 rounded-br-2xl w-60 text-left">
          <LabelText text="Player's Name" />
          <input
            name="summonersName"
            value={addSummoner.summonersName}
            onChange={onChangeSummonerData}
            type="text"
            className="rounded-lg w-full px-2 text-sm bg-gray-200"
          />
        </div>
      </form>
    </>
  );
};

export default SearchPlayer;
